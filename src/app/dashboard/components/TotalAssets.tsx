import React from 'react';
import Image from 'next/image';

interface WalletData {
  name: string;
  address: string;
  value: string;
  count: string;
}

export const TotalAssets = () => {
  const wallets: WalletData[] = [
    {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      value: "+54",
      count: "118"
    },
    {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      value: "+54",
      count: "118"
    },
    {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      value: "+54",
      count: "118"
    },
    {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      value: "+54",
      count: "118"
    }
  ];

  return (
    <div className="h-full">
      {/* Total Assets Card with Graph Background */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full">
    
        <div className="bg-gray-900 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-6 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">Total Assets</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl text-white">4960.01</span>
              <span className="text-white/60 text-xs sm:text-sm">USD</span>
            </div>
            <div className="text-white/60 text-xs">0.234156 BTC</div>
          </div>

          {/* Graph Background */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/images/graph.png"
              alt="Graph"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Wallet List */}
        <div className="space-y-3 sm:space-y-4">
          {wallets.map((wallet, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/images/wallet-avatar.png"
                  width={28}
                  height={28}
                  alt={wallet.name}
                  className="rounded-full w-7 h-7 sm:w-8 sm:h-8"
                />
                <div>
                  <p className="text-xs sm:text-sm text-gray-900">{wallet.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-600">{wallet.address}</p>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs">
                <span className="text-status-success">{wallet.value}</span>
                <span className="text-gray-600 ml-1">· {wallet.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};