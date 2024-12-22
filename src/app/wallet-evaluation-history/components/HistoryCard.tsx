// components/HistoryCard.tsx
import React from "react";
import Image from "next/image";
import { HistoryRiskBar } from "./HistoryRiskBar";

interface RiskBar {
  title: string;
  value: string;
  percentage: number;
  color: 'bg-[#00B34D]' | 'bg-[#FF4D4F]' | 'bg-[#FFA800]'; // Restricting to specific values
}


interface WalletProps {
  wallet: {
    address: string;
    avatar: string;
    score: number;
    status: string;
    lastSync: string;
    timestamp: string;
    riskBars: RiskBar[];
    aiInsights: string;
  };
}

export const HistoryCard: React.FC<WalletProps> = ({ wallet }) => {
  // Calculate circle progress values
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (wallet.score / 100) * circumference;
  const dashoffset = circumference - progress;

  return (
    <div className="bg-white rounded-2xl p-6">
      {/* Header with Time */}
      <div className="flex items-center justify-between mb-6">
        {/* Left Side - Wallet Info */}
        <div className="flex items-center gap-3">
          <Image
            src={wallet.avatar}
            width={36}
            height={36}
            alt="Wallet"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-albayan font-medium text-[#1A1A1A]">
                {wallet.address}
              </span>
              <button className="hover:bg-[#F4F6FB] p-1 rounded transition-colors">
                <Image src="/images/copy1.png" width={14} height={14} alt="Copy" />
              </button>
            </div>
            <span className="text-xs text-[#666666]">Last sync: {wallet.lastSync}</span>
          </div>
        </div>

        {/* Right Side - Time */}
        <span className="text-xs text-[#666666] border px-4 py-2 rounded-lg">
          {wallet.timestamp}
        </span>
      </div>

      {/* Score and Risk Bars Section */}
      <div className="grid grid-cols-[30%_70%] mb-6">
        {/* Left Section - Score and Profile Safe */}
        <div className="flex items-center gap-3 pr-6 border-r border-[#E5E5E5]">
          {/* Progress Circle */}
          <div className="relative">
            <svg className="w-32 h-32" viewBox="0 0 112 112">
              <circle
                cx="56"
                cy="56"
                r={radius}
                className="fill-none stroke-[#E6F7F1] stroke-[8]"
              />
              <circle
                cx="56"
                cy="56"
                r={radius}
                className="fill-none stroke-[#00B34D] stroke-[8]"
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
                transform="rotate(-90 56 56)"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-semibold text-[#00B34D]">
                {wallet.score}
              </span>
              <span className="text-sm text-black mt-1">Overall Score</span>
            </div>
          </div>

          {/* Profile Safe Button */}
          <div className="cursor-pointer px-2">
            <div className="bg-[#00B34D] text-white py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-md">
              <Image
                src="/images/check-circle1.png"
                width={20}
                height={20}
                alt="Safe"
              />
              {wallet.status}
            </div>
          </div>
        </div>

        {/* Right Section - Risk Bars */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 pl-6">
          {wallet.riskBars.map((bar, index) => (
            <HistoryRiskBar
              key={index}
              title={bar.title}
              value={bar.value}
              percentage={bar.percentage}
              color={bar.color}
            />
          ))}
        </div>
      </div>

      {/* AI Insights Section */}
      <div className="bg-[#F8F9FB] rounded-xl p-4">
        <h3 className="text-sm font-medium mb-2">AI Insights</h3>
        <p className="text-xs text-[#666666] leading-5">{wallet.aiInsights}</p>
      </div>
    </div>
  );
};