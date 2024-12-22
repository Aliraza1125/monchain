// RiskBar.tsx
import React from 'react';

interface RiskBarProps {
 title: string;
 value: string;
 percentage: number;
 color: string;
}

export const RiskBar: React.FC<RiskBarProps> = ({ 
 title, 
 value, 
 percentage, 
 color 
}) => (
 <div className="mb-6 group">
   <div className="flex justify-between text-sm text-[#666666] mt-4 mb-2">
     <span className="font-medium">{title}</span>
     <div className="flex items-center gap-2">
       <span className={`text-${color.replace('bg-', '')}`}>
         {value}
       </span>
     </div>
   </div>
   <div className="h-2 rounded-full bg-[#F4F4F4] overflow-hidden">
     <div 
       className={`h-full rounded-full ${color} transition-all duration-300`}
       style={{ 
         width: `${percentage}%`,
         boxShadow: percentage > 50 ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none'
       }}
     />
   </div>
 </div>
);

// Export for TypeScript
export type { RiskBarProps };