// components/HistoryCard.tsx
import React from "react";
import Image from "next/image";
import { HistoryRiskBar } from "./HistoryRiskBar";

interface RiskBar {
  title: string;
  value: string;
  percentage: number;
  color: 'bg-[#00B34D]' | 'bg-[#FF4D4F]' | 'bg-[#FFA800]';
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
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (wallet.score / 100) * circumference;
  const dashoffset = circumference - progress;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6">
      {/* Header with Time */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
        {/* Left Side - Wallet Info */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={wallet.avatar}
            width={36}
            height={36}
            alt="Wallet"
            className="rounded-full w-8 h-8 sm:w-9 sm:h-9"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-albayan font-medium text-[#1A1A1A] truncate max-w-[150px] sm:max-w-[200px]">
                {wallet.address}
              </span>
              <button className="hover:bg-[#F4F6FB] p-1 rounded transition-colors flex-shrink-0">
                <Image src="/images/copy1.png" width={14} height={14} alt="Copy" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
            <span className="text-[10px] sm:text-xs text-[#666666]">Last sync: {wallet.lastSync}</span>
          </div>
        </div>

        {/* Right Side - Time */}
        <span className="text-[10px] sm:text-xs text-[#666666] border px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg self-start sm:self-center">
          {wallet.timestamp}
        </span>
      </div>

      {/* Score and Risk Bars Section */}
      <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] gap-6 mb-4 sm:mb-6">
        {/* Left Section - Score and Profile Safe */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 sm:pr-6 sm:border-r border-[#E5E5E5]">
          {/* Progress Circle */}
          <div className="relative w-24 sm:w-32">
            <svg className="w-full h-full" viewBox="0 0 112 112">
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
              <span className="text-3xl sm:text-4xl font-semibold text-[#00B34D]">
                {wallet.score}
              </span>
              <span className="text-[10px] sm:text-sm text-black mt-1">Overall Score</span>
            </div>
          </div>

          {/* Profile Safe Button */}
          <div className="px-2 w-full sm:w-auto">
            <div className="bg-[#00B34D] text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-md">
              <Image
                src="/images/check-circle1.png"
                width={20}
                height={20}
                alt="Safe"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              {wallet.status}
            </div>
          </div>
        </div>

        {/* Right Section - Risk Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-4 sm:pl-6">
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
      <div className="bg-[#F8F9FB] rounded-lg sm:rounded-xl p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-medium mb-2">AI Insights</h3>
        <p className="text-[10px] sm:text-xs text-[#666666] leading-4 sm:leading-5">
          {wallet.aiInsights}
        </p>
      </div>
    </div>
  );
};