// components/InsightsSection.tsx
import React from 'react';
import Image from 'next/image';
interface TableRow {
  serialNo: string;
  walletName: string;
  walletAddress: string;
  date: string;
  status: 'Under Review' | 'Resolved';
}

// interface Insight {
//   text: string;
//   timestamp: string;
//   status: 'Warning' | 'Success' | 'Error';
// }

export const InsightsSection = () => {
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

  // const insights: Insight[] = [
  //   {
  //     text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  //     timestamp: "00-00-0000",
  //     status: "Error"
  //   },
  //   {
  //     text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  //     timestamp: "00-00-0000",
  //     status: "Success"
  //   },
  //   {
  //     text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  //     timestamp: "00-00-0000",
  //     status: "Success"
  //   },
  //   {
  //     text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  //     timestamp: "00-00-0000",
  //     status: "Error"
  //   }
  // ];

  return (
    <div className="grid grid-cols-[1fr_1.2fr] gap-6 mt-8">
      {/* Left Column - Table */}
      <div className="bg-white rounded-2xl p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="text-sm font-medium text-[#666666] text-left pb-4">Serial #</th>
              <th className="text-sm font-medium text-[#666666] text-left pb-4">Wallet Address</th>
              <th className="text-sm font-medium text-[#666666] text-left pb-4">Date</th>
              <th className="text-sm font-medium text-[#666666] text-left pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index} className="border-b border-[#E5E5E5] last:border-b-0">
                <td className="py-4 text-sm text-[#666666]">{row.serialNo}</td>
                <td className="py-4">
                  <div>
                    <p className="text-sm text-[#1A1A1A]">{row.walletName}</p>
                    <p className="text-xs text-[#666666]">{row.walletAddress}</p>
                  </div>
                </td>
                <td className="py-4 text-sm text-[#666666]">{row.date}</td>
                <td className="py-4">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs ${
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

   {/* Right Column - AI Insights */}
<div className="bg-white rounded-2xl p-6 h-full">
  <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">
    AI Insights & Recommendations
  </h2>
  <div className="space-y-4">
    {[1, 2, 3, 4].map((item, index) => (
      <div 
        key={index} 
        className="flex items-start justify-between gap-4 rounded-xl hover:bg-[#F8F9FB] p-3 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-4">
          {/* Color Bar */}
          <div 
            className={`w-2 h-12 rounded-l-full shrink-0 ${
              index === 0 || index === 3
                ? 'bg-[#FF4D4F]'  // Red for warnings
                : 'bg-[#00B34D]'  // Green for success
            }`} 
          />
          {/* Text Content */}
          <p className="text-sm leading-6 text-[#666666] pt-1">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        {/* Timestamp and Arrow */}
        <div className="flex items-center gap-8 shrink-0 pt-1">
          <span className="text-sm text-[#666666]">00-00-0000</span>
          <Image 
                  src="/images/arrow-right.png" 
                  width={8} 
                  height={8} 
                  alt="View" 
                />
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};