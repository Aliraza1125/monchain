// [address]/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { CircleProgress } from '../components/CircleProgress';
import { RiskBreakdown } from '../components/RiskBreakdown';
import { AIInsights } from '../components/AIInsights';
import { WalletDetails } from '../components/WalletDetails';

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
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/wallets');
        const allWallets: WalletData[] = response.data.wallets; // Explicitly type the array
        const wallet = allWallets.find((w) => w.address === params.address);
        if (wallet) {
          setWalletData(wallet);
        } else {
          // Handle not found
          router.push('/');
        }
      } catch (error) {
        console.error('Error fetching wallet data:', error);
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
    {/* Background Image - positioned to start from the very top */}
    <div 
      className="fixed top-0 left-0 w-full h-full bg-no-repeat"
      style={{
        backgroundImage: `url('/bg-2.png')`, // specific background for wallet page
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
        zIndex: -1,
      }}
    />
    
    <div className=" min-h-screen">
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#666666] hover:text-[#0066FF]">
            Home
          </Link>
          <span className="text-[#666666]">/</span>
          <span className="text-[#666666]">Wallet Evaluation Result</span>
          <span className="text-[#666666]">/</span>
          <span className="text-[#666666]">{walletData.address}</span>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-8">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Image src="/images/search-icon.png" width={20} height={20} alt="Search" />
          </div>
          <input 
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-lg border border-[#E5E5E5] bg-white"
            placeholder="0xe9423nj2fk23223j532j3h2fk3hj23h3422"
          />
        </form>

        {/* Top Grid */}
        <div className="grid grid-cols-[280px_1fr] gap-8 mb-4">
          {/* Risk Score */}
          <div className="bg-white rounded-2xl p-5 relative h-[240px]">
            <h2 className="text-[#666666] text-sm mb-2">Risk Score</h2>
            <div className="flex justify-center">
              <CircleProgress percentage={walletData.score} />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 px-8">
              <div className="bg-[#00B34D] text-white py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-md">
                <Image src="/images/check-circle1.png" width={20} height={20} alt="Safe" />
                {walletData.status}
              </div>
            </div>
          </div>

          <WalletDetails wallet={walletData} />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-[3fr_2fr] gap-8 mt-16">
          <RiskBreakdown riskBars={walletData.riskBars} />
          <AIInsights insights={walletData.aiInsights} />
        </div>
      </div>
    </div>
    </div>
  );
}