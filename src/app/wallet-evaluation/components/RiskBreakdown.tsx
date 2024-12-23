// RiskBreakdown.tsx
import React from 'react';
import { RiskBar } from './RiskBar';

interface RiskBarData {
  title: string;
  value: string;
  percentage: number;
  color: string;
}

export const RiskBreakdown: React.FC<{ riskBars: RiskBarData[] }> = ({ riskBars }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4">
        <h2 className="text-sm sm:text-base font-medium text-[#1A1A1A]">
          Risk Breakdown
        </h2>
        
        {/* Legend */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#666666]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#FF4843] flex-shrink-0" />
              <span className="whitespace-nowrap">00 - 49 - High Risk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#FFCD43] flex-shrink-0" />
              <span className="whitespace-nowrap">49 - 65 - Medium Risk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#00B34D] flex-shrink-0" />
              <span className="whitespace-nowrap">65 - 100 - Low Risk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Bars */}
      <div className="space-y-4 sm:space-y-6">
        {riskBars.map((bar, index) => (
          <RiskBar 
            key={index}
            title={bar.title}
            value={bar.value}
            percentage={bar.percentage}
            color={bar.color}
          />
        ))}
      </div>
    </div>
  );
};

// // Optional: Add helper functions for color determination
// const getRiskColor = (percentage: number): string => {
//  if (percentage >= 65) return 'bg-[#00B34D]';
//  if (percentage >= 49) return 'bg-[#FFCD43]';
//  return 'bg-[#FF4843]';
// };

// // Optional: Add risk level determination
// const getRiskLevel = (percentage: number): string => {
//  if (percentage >= 65) return 'Low Risk';
//  if (percentage >= 49) return 'Medium Risk';
//  return 'High Risk';
// };

// Export types for reuse
export type { RiskBarData };