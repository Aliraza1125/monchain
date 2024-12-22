// WalletDetails.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface WalletData {
  address: string;
  avatar: string;
  lastSync: string;
  status: string;
  aiInsights: string;
}

export const WalletDetails: React.FC<{ wallet: WalletData }> = ({ wallet }) => {
  const router = useRouter();

  const handleViewHistory = () => {
    router.push('/wallet-evaluation-history');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet.address);
    // Optionally add a toast notification here
  };

  const handleExportReport = () => {
    router.push(`/wallet-evaluation/${wallet.address}/export`);
  };
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        {/* Left side with avatar, address and sync time */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image 
              src={wallet.avatar}
              fill
              alt="Wallet"
              className="rounded-full object-cover cursor-pointer"
              onClick={handleViewHistory}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 
                className="text-base font-medium text-[#1A1A1A] cursor-pointer hover:text-[#0066FF]"
                onClick={handleViewHistory}
              >
                {wallet.address}
              </h2>
              
              <button 
                className="hover:bg-[#F4F6FB] mt-1 p-1.5 rounded-md transition-colors"
                onClick={copyToClipboard}
              >
                <Image src="/images/copy1.png" width={16} height={16} alt="Copy" />
              </button>
            </div>
            <p className="text-xs text-[#666666]">Last sync: {wallet.lastSync}</p>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <button 
            className="p-2 hover:bg-[#F4F6FB] rounded-md transition-colors"
            onClick={handleViewHistory}
          >
            <Image src="/images/eye.png" width={20} height={20} alt="View" />
          </button>
          <button className="bg-[#0066FF] text-white px-4 py-2.5 rounded-full text-sm flex items-center gap-2 hover:bg-[#0052CC] transition-colors" onClick={handleExportReport}>
            <Image src="/images/download.png" width={20} height={20} alt="Export" />
            Export Full Report
          </button>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-[#666666] leading-6 mt-4">
        {wallet.aiInsights}
      </p>

      {/* Report as fraudulent */}
      <div className="flex justify-end mt-4">
        <button className="text-[#FF4D4F] flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity mt-4">
          <Image 
            src="/images/flag.png" 
            width={16} 
            height={16} 
            alt="Flag"
            className="opacity-80" 
          />
          Report as fraudulent
        </button>
      </div>
    </div>
  );
};