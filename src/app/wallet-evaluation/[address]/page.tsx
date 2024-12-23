"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { CircleProgress } from "../components/CircleProgress";
import { RiskBreakdown } from "../components/RiskBreakdown";
import { AIInsights } from "../components/AIInsights";
import { WalletDetails } from "../components/WalletDetails";

interface WalletData {
  id: number;
  address: string;
  avatar: string;
  score: number;
  status: string;
  lastSync: string;
  timestamp: string;
  riskBars: {
    title: string;
    value: string;
    percentage: number;
    color: string;
  }[];
  aiInsights: string;
}

export default function WalletEvaluation() {
  const params = useParams();
  const router = useRouter();
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/wallets");
        const allWallets: WalletData[] = response.data.wallets;
        const wallet = allWallets.find((w) => w.address === params.address);
        if (wallet) {
          setWalletData(wallet);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.address) {
      fetchWalletData();
    }
  }, [params.address, router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/wallet-evaluation/${searchValue}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B34D]"></div>
      </div>
    );
  }

  if (!walletData) {
    return <div>Wallet not found</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: `url('/bg-2.png')`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          zIndex: -1,
        }}
      />

      <div className="min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="text-[#666666] hover:text-[#0066FF]">
              Home
            </Link>
            <span className="text-[#666666]">/</span>
            <span className="text-[#666666]">Wallet Evaluation Result</span>
            <span className="text-[#666666]">/</span>
            <span className="text-[#666666] truncate max-w-[150px] sm:max-w-none">
              {walletData.address}
            </span>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative mb-4 sm:mb-8">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image
                src="/images/search-icon.png"
                width={20}
                height={20}
                alt="Search"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full h-10 sm:h-12 pl-10 sm:pl-12 pr-4 rounded-lg border border-[#E5E5E5] bg-white text-sm sm:text-base"
              placeholder="Enter wallet address..."
            />
          </form>

          {/* Top Grid */}
          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 sm:gap-6 lg:gap-8 mb-4">
            {/* Risk Score - Using order for mobile */}
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-4 sm:p-5 relative h-[200px] sm:h-[240px]">
              <h2 className="text-[#666666] text-sm mb-2">Risk Score</h2>
              <div className="flex justify-center">
                <CircleProgress percentage={walletData.score} />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-5 right-4 sm:right-5 px-4 sm:px-8">
                <div className="bg-[#00B34D] text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-md">
                  <Image
                    src="/images/check-circle1.png"
                    width={20}
                    height={20}
                    alt="Safe"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  {walletData.status}
                </div>
              </div>
            </div>

            {/* Wallet Details - Using order for mobile */}
            <div className="order-1 lg:order-2 lg:h-full">
              <WalletDetails wallet={walletData} />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            <RiskBreakdown riskBars={walletData.riskBars} />
            <AIInsights insights={walletData.aiInsights} />
          </div>
        </div>
      </div>
    </div>
  );
}
