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
    <div className="bg-white rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-medium text-[#1A1A1A]">
          Risk Breakdown
        </h2>
        
        {/* Legend */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-wrap gap-4 text-sm sm:text-base text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#FF4843] flex-shrink-0" />
              <span className="whitespace-nowrap">00 - 49 - High Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#FFCD43] flex-shrink-0" />
              <span className="whitespace-nowrap">49 - 65 - Medium Risk</span>
            </div>
            
          </div>
        </div>
      </div>
      <div className='flex justify-end mb-4'>

      <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#00B34D] flex-shrink-0" />
              <span className="whitespace-nowrap">65 - 100 - Low Risk</span>
            </div>
      </div>

      {/* Risk Bars */}
      <div className="space-y-8">
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

// Export types for reuse
export type { RiskBarData };