// components/TotalAssets.tsx
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
    <div>
      {/* Total Assets Card with Graph Background */}
      <div className="bg-white rounded-2xl p-6 h-full">
    
      <div className="bg-[#1A1A1A] rounded-2xl px-6 py-4 mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-white text-sm font-medium mb-2">Total Assets</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl  text-white">4960.01</span>
            <span className="text-white/60 text-sm">USD</span>
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
      <div className="space-y-4">
        {wallets.map((wallet, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/wallet-avatar.png"
                width={32}
                height={32}
                alt={wallet.name}
                className="rounded-full"
              />
              <div>
                <p className="text-sm text-[#1A1A1A]">{wallet.name}</p>
                <p className="text-xs text-[#666666]">{wallet.address}</p>
              </div>
            </div>
            <div className="text-xs">
              <span className="text-[#00B34D]">{wallet.value}</span>
              <span className="text-[#666666] ml-1">· {wallet.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};