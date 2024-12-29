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
    <div className="bg-white rounded-2xl px-4 py-8 sm:p-6 lg:h-full flex flex-col space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-2 mb-4">
        {/* Left side with avatar, address and sync time */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0">
            <Image 
              src={wallet.avatar}
              fill
              alt="Wallet"
              className="rounded-full object-cover cursor-pointer"
              onClick={handleViewHistory}
            />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h2 
                className="text-sm sm:text-[36px] font-medium text-[#1A1A1A] cursor-pointer hover:text-[#0066FF]  max-w-[180px] sm:max-w-[400px]"
                onClick={handleViewHistory}
              >
                {wallet.address}
              </h2>
              
              <button 
                className="hover:bg-[#F4F6FB] p-1.5 rounded-md transition-colors flex-shrink-0"
                onClick={copyToClipboard}
              >
                <Image 
                  src="/images/copy1.png" 
                  width={16} 
                  height={16} 
                  alt="Copy"
                  className="w-3 h-3 sm:w-4 sm:h-4" 
                />
              </button>
            </div>
            <p className="text-[10px] sm:text-lg text-[#666666]">
              Last sync: {wallet.lastSync}
            </p>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            className="p-2 hover:bg-[#F4F6FB] rounded-md transition-colors"
            onClick={handleViewHistory}
          >
            <Image 
              src="/images/eye.png" 
              width={24} 
              height={24} 
              alt="View"
              className="w-4 h-4 sm:w-5 sm:h-5" 
            />
          </button>
          <button 
            className="bg-[#2F7BD3] text-white px-3 sm:px-[18px] py-2 sm:py-[15px] rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-[#0052CC] transition-colors flex-shrink-0" 
            onClick={handleExportReport}
          >
            <Image 
              src="/images/download.png" 
              width={24} 
              height={24} 
              alt="Export"
              className="w-4 h-4 sm:w-5 sm:h-5" 
            />
            <span className="hidden sm:inline sm:text-[20px]">Export Full Report</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-xs sm:text-[20px] text-[#666666] leading-5 sm:leading-6 mt-3 sm:mt-4">
        {wallet.aiInsights}
      </p>

      {/* Report as fraudulent */}
      <div className="flex justify-end mt-3 sm:mt-4">
        <button className="text-[#FF4D4F] flex items-center gap-1.5 text-xs sm:text-sm hover:opacity-80 transition-opacity">
          <Image 
            src="/images/flag.png" 
            width={16} 
            height={16} 
            alt="Flag"
            className="opacity-80 w-3 h-3 sm:w-4 sm:h-4" 
          />
          Report as fraudulent
        </button>
      </div>
    </div>
  );
};