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
     <div className="flex justify-between items-center">
       <h2 className="text-base font-medium text-[#1A1A1A] mb-4">Risk Breakdown</h2>
       
       <div className="mb-2">
         <div className="flex gap-4 text-xs text-[#666666]">
           <div className="flex items-center gap-1.5">
             <span className="w-4 h-4 rounded-full bg-[#FF4843]" />
             <span>00 - 49 - High Risk</span>
           </div>
           <div className="flex items-center gap-1.5">
             <span className="w-4 h-4 rounded-full bg-[#FFCD43]" />
             <span>49 - 65 - Medium Risk</span>
           </div>
         </div>
       </div>
     </div>
     
     <div className="mb-6">
       <div className="flex text-xs text-[#666666] items-end justify-end">
         <div className="flex items-center gap-1.5">
           <span className="w-4 h-4 rounded-full bg-[#00B34D]" />
           <span>65 - 100 - Low Risk</span>
         </div>
       </div>
     </div>

     {/* Map through risk bars from props */}
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