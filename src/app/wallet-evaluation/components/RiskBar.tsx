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
  <div className="group">
    <div className="flex justify-between text-base sm:text-lg text-[#666666] mb-3">
      <span className="font-medium truncate mr-2">{title}</span>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className={`text-${color.replace('bg-', '')}`}>
          {value}
        </span>
      </div>
    </div>
    <div className="h-3 sm:h-4 rounded-full bg-[#F4F4F4] overflow-hidden">
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