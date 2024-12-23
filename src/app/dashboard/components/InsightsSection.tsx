import React, { useState } from 'react';
import Image from 'next/image';

interface TableRow {
  serialNo: string;
  walletName: string;
  walletAddress: string;
  date: string;
  status: 'Under Review' | 'Resolved';
}

export const InsightsSection = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'insights'>('table');

  const tableRows: TableRow[] = [
    {
      serialNo: "000",
      walletName: "Lorem Ipsum Wallet",
      walletAddress: "0x12f2h12h3h1...",
      date: "09-00-000",
      status: "Under Review"
    },
    {
      serialNo: "000",
      walletName: "Lorem Ipsum Wallet",
      walletAddress: "0x12f2h12h3h1...",
      date: "09-00-000",
      status: "Under Review"
    },
    {
      serialNo: "000",
      walletName: "Lorem Ipsum Wallet",
      walletAddress: "0x12f2h12h3h1...",
      date: "09-00-000",
      status: "Resolved"
    },
    {
      serialNo: "000",
      walletName: "Lorem Ipsum Wallet",
      walletAddress: "0x12f2h12h3h1...",
      date: "09-00-000",
      status: "Resolved"
    },
    {
      serialNo: "000",
      walletName: "Lorem Ipsum Wallet",
      walletAddress: "0x12f2h12h3h1...",
      date: "09-00-000",
      status: "Resolved"
    },
    {
      serialNo: "000",
      walletName: "Lorem Ipsum Wallet",
      walletAddress: "0x12f2h12h3h1...",
      date: "09-00-000",
      status: "Resolved"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 sm:gap-6 mt-6 sm:mt-8">
      {/* Mobile Tabs for Small Screens */}
      <div className="lg:hidden flex mb-4">
        <button 
          onClick={() => setActiveTab('table')}
          className={`flex-1 py-2 text-sm ${
            activeTab === 'table' 
              ? 'bg-[#0066FF] text-white' 
              : 'bg-white text-[#666666] border border-[#E5E5E5]'
          }`}
        >
          Wallet Review
        </button>
        <button 
          onClick={() => setActiveTab('insights')}
          className={`flex-1 py-2 text-sm ${
            activeTab === 'insights' 
              ? 'bg-[#0066FF] text-white' 
              : 'bg-white text-[#666666] border border-[#E5E5E5]'
          }`}
        >
          AI Insights
        </button>
      </div>

      {/* Left Column - Table */}
      <div 
        className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 ${
          activeTab === 'insights' ? 'hidden lg:block' : ''
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[#E5E5E5]">
                <th className="text-xs sm:text-sm font-medium text-[#666666] text-left pb-3 sm:pb-4">Serial #</th>
                <th className="text-xs sm:text-sm font-medium text-[#666666] text-left pb-3 sm:pb-4">Wallet Address</th>
                <th className="text-xs sm:text-sm font-medium text-[#666666] text-left pb-3 sm:pb-4">Date</th>
                <th className="text-xs sm:text-sm font-medium text-[#666666] text-left pb-3 sm:pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index} className="border-b border-[#E5E5E5] last:border-b-0">
                  <td className="py-3 sm:py-4 text-xs sm:text-sm text-[#666666]">{row.serialNo}</td>
                  <td className="py-3 sm:py-4">
                    <div>
                      <p className="text-xs sm:text-sm text-[#1A1A1A]">{row.walletName}</p>
                      <p className="text-[10px] sm:text-xs text-[#666666]">{row.walletAddress}</p>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 text-xs sm:text-sm text-[#666666]">{row.date}</td>
                  <td className="py-3 sm:py-4">
                    <span 
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs ${
                        row.status === 'Resolved' 
                          ? 'bg-[#E6F7F1] text-[#00B34D]' 
                          : 'bg-[#FFF7E6] text-[#FFA800]'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column - AI Insights */}
      <div 
        className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full ${
          activeTab === 'table' ? 'hidden lg:block' : ''
        }`}
      >
        <h2 className="text-base sm:text-lg font-medium text-[#1A1A1A] mb-4 sm:mb-6">
          AI Insights & Recommendations
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div 
              key={index} 
              className="flex items-start justify-between gap-3 sm:gap-4 rounded-xl hover:bg-[#F8F9FB] p-2 sm:p-3 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Color Bar */}
                <div 
                  className={`w-1.5 sm:w-2 h-8 sm:h-12 rounded-l-full shrink-0 ${
                    index === 0 || index === 3
                      ? 'bg-[#FF4D4F]'  // Red for warnings
                      : 'bg-[#00B34D]'  // Green for success
                  }`} 
                />
                {/* Text Content */}
                <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-[#666666] pt-0.5">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              {/* Timestamp and Arrow */}
              <div className="flex items-center gap-2 sm:gap-8 shrink-0 pt-0.5">
                <span className="text-[10px] sm:text-sm text-[#666666]">00-00-0000</span>
                <Image 
                  src="/images/arrow-right.png" 
                  width={6} 
                  height={6} 
                  alt="View" 
                  className="w-4 h-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};