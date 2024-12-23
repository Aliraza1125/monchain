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
    }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:my-6">
        <h2 className="text-base sm:text-lg font-medium text-[#1A1A1A] mb-3 sm:mb-0">Wallet Management</h2>
        <button className="flex items-center gap-1.5 sm:gap-2 bg-[#0066FF] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-[#0052CC] transition-colors text-xs sm:text-sm">
          <span className="text-sm sm:text-base">+</span>
          Add Wallet
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {wallets.map((wallet, index) => (
          <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4">
            {/* Header with Wallet Info */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image
                src="/images/wallet-avatar.png"
                width={28}
                height={28}
                alt={wallet.name}
                className="rounded-full w-7 h-7 sm:w-8 sm:h-8"
              />
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#1A1A1A]">{wallet.name}</h3>
                <p className="text-[10px] sm:text-xs text-[#666666]">{wallet.address}</p>
              </div>
            </div>

            {/* Score Section */}
            <div className="flex justify-between mb-3 sm:mb-4">
              <div>
                <p className="text-[10px] sm:text-xs text-[#666666]">Security Score</p>
                <p className="text-xs sm:text-sm">{wallet.securityScore}</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#666666]">Risk Level</p>
                <p className="text-xs sm:text-sm">{wallet.riskLevel}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-1.5 sm:gap-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/evaluate-icon.png"
                  width={20}
                  height={20}
                  alt="Evaluate"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
              <button className="flex-1 flex items-center gap-1.5 sm:gap-2 bg-[#0052CC] border border-[#E5E5E5] rounded-full py-1.5 sm:py-2">
                <span className="flex-1 text-xs sm:text-sm text-white">Evaluate</span>
              </button>
              <button className="bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/info-icon1.png"
                  width={20}
                  height={20}
                  alt="Info"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};