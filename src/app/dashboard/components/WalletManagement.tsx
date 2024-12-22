// components/WalletManagement.tsx
import React from 'react';
import Image from 'next/image';

interface WalletCard {
  name: string;
  address: string;
  securityScore: string;
  riskLevel: string;
}

export const WalletManagement = () => {
  const wallets: WalletCard[] = [
    {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      securityScore: "0000",
      riskLevel: "0000"
    }, {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      securityScore: "0000",
      riskLevel: "0000"
    }, {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      securityScore: "0000",
      riskLevel: "0000"
    }, {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      securityScore: "0000",
      riskLevel: "0000"
    }, {
      name: "Lorem ipsum Wallet",
      address: "0x12f2h12h3h1...",
      securityScore: "0000",
      riskLevel: "0000"
    },
    // ... other wallets
  ];

  return (
    <div >
      <div className="flex items-center justify-between my-6">
        <h2 className="text-lg font-medium text-[#1A1A1A]">Wallet Management</h2>
        <button className="flex items-center gap-2 bg-[#0066FF] text-white px-4 py-2 rounded-xl hover:bg-[#0052CC] transition-colors">
          <span>+</span>
          Add Wallet
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {wallets.map((wallet, index) => (
          <div key={index} className="bg-white rounded-2xl p-4">
            {/* Header with Wallet Info */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/wallet-avatar.png"
                width={32}
                height={32}
                alt={wallet.name}
                className="rounded-full"
              />
              <div>
                <h3 className="text-sm font-medium text-[#1A1A1A]">{wallet.name}</h3>
                <p className="text-xs text-[#666666]">{wallet.address}</p>
              </div>
            </div>

            {/* Score Section */}
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-xs text-[#666666]">Security Score</p>
                <p className="text-sm">{wallet.securityScore}</p>
              </div>
              <div>
                <p className="text-xs text-[#666666]">Risk Level</p>
                <p className="text-sm">{wallet.riskLevel}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
                <div className="flex items-center justify-center ">
                  <Image
                    src="/images/evaluate-icon.png"
                    width={24}
                    height={24}
                    alt="Evaluate"
                  />
                </div>
              <button className="flex-1 flex items-center gap-2 bg-[#0052CC] border border-[#E5E5E5] rounded-full py-2">
                <span className="flex-1 text-sm text-white">Evaluate</span>
              </button>
              <button className="bg-white rounded-lg  flex items-center justify-center">
                <Image
                  src="/images/info-icon1.png"
                  width={24}
                  height={24}
                  alt="Info"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};