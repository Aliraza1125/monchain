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
  color: "bg-status-error" | "bg-status-success" | "bg-status-warning";
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
      <div className="relative min-h-screen">
        <div 
          className="fixed top-0 left-0 w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url('/bg-3.png')`,
            backgroundSize: '100% 100%',
            zIndex: -1,
          }}
        />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-status-success"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen">
        <div 
          className="fixed top-0 left-0 w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url('/bg-3.png')`,
            backgroundSize: '100% 100%',
            zIndex: -1,
          }}
        />
        <div className="flex items-center justify-center min-h-screen text-status-error px-4 text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-3.png')`,
          backgroundSize: '100% 100%',
          zIndex: -1,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-600">Wallet Evaluation History</span>
        </div>

        {/* Search Section */}
        <div className="mb-4 sm:mb-8 space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image 
                src="/images/search-icon.png" 
                width={20} 
                height={20} 
                alt="Search"
                className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" 
              />
            </div>
            <input
              type="text"
              className="w-full h-10 sm:h-12 pl-10 sm:pl-12 pr-4 rounded-lg border border-gray-200 bg-white text-sm sm:text-base text-gray-900 placeholder:text-gray-600 focus:border-primary focus:outline-none"
              placeholder="Enter wallet address..."
            />
          </div>
          <div className="flex justify-end">
            <div className="relative inline-block w-full sm:w-auto">
              <select
                className="w-full sm:w-auto h-10 pl-4 pr-10 rounded-lg border border-gray-200 bg-white text-xs sm:text-sm text-gray-600 appearance-none cursor-pointer focus:border-primary focus:outline-none"
              >
                <option>Sort by Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Image 
                  src="/images/downarrow.svg" 
                  width={12} 
                  height={12} 
                  alt="Sort"
                  className="w-3 h-3 opacity-60" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* History Cards */}
        <div className="space-y-4 sm:space-y-8">
          {wallets.map((wallet) => (
            <HistoryCard key={wallet.id} wallet={wallet} />
          ))}
        </div>
      </div>
    </div>
  );
}