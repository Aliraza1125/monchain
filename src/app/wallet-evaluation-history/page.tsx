'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HistoryCard } from './components/HistoryCard';
import { getWallets } from '@/utils/api';

export interface RiskBar {
  title: string;
  value: string;
  percentage: number;
  color: "bg-[#FF4D4F]" | "bg-[#00B34D]" | "bg-[#FFA800]";
}

interface Wallet {
  id: number;
  address: string;
  avatar: string;
  score: number;
  status: string;
  lastSync: string;
  timestamp: string;
  riskBars: RiskBar[];
  aiInsights: string;
}

export default function WalletEvaluationHistory() {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        setLoading(true);
        const data = await getWallets();
        setWallets(data.wallets);
        setError(null);
      } catch (err) {
        setError('Failed to load wallet data');
        console.error('Error loading wallet data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B34D]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#F4F6FB] to-[#F2F3FD] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#666666] hover:text-[#0066FF]">
            Home
          </Link>
          <span className="text-[#666666]">/</span>
          <span className="text-[#666666]">Wallet Evaluation History</span>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image src="/images/search-icon.png" width={20} height={20} alt="Search" />
            </div>
            <input
              type="text"
              className="w-full h-12 pl-12 pr-4 rounded-lg border border-[#E5E5E5] bg-white"
              placeholder="0xe9423nj2fk23223j532j3h2fk3hj23h3422"
            />
          </div>
          <div className="flex justify-end">
            <div className="relative inline-block">
              <select
                className="h-10 pl-4 pr-10 rounded-lg border border-[#E5E5E5] bg-white text-sm text-[#666666] appearance-none cursor-pointer"
              >
                <option>Sort by Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Image src="/images/downarrow.svg" width={12} height={12} alt="Sort" />
              </div>
            </div>
          </div>
        </div>

        {/* History Cards */}
        <div className="space-y-8">
          {wallets.map((wallet) => (
            <HistoryCard key={wallet.id} wallet={wallet} />
          ))}
        </div>
      </div>
    </div>
  );
}
