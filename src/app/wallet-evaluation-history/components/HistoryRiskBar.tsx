// components/HistoryRiskBar.tsx
import React from 'react';

interface HistoryRiskBarProps {
  title: string;
  value: string;
  percentage: number;
  color: string; // Allow any string value
}

export const HistoryRiskBar: React.FC<HistoryRiskBarProps> = ({ 
  title, 
  value, 
  percentage, 
  color 
}) => {
  // Function to determine text color based on percentage
  const getTextColor = () => {
    switch (color) {
      case 'bg-[#FF4D4F]':
        return 'text-[#FF4D4F]';
      case 'bg-[#FFA800]':
        return 'text-[#FFA800]';
      default:
        return 'text-[#666666]';
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[#666666]">{title}</span>
        <span className={getTextColor()}>{value}</span>
      </div>
      <div className="relative h-2 bg-[#F4F4F4] rounded-full overflow-hidden">
        <div 
          className={`absolute top-0 left-0 h-full ${color} rounded-full transition-all duration-300 ease-in-out`}
          style={{ 
            width: `${percentage}%`,
            boxShadow: percentage > 50 ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none' 
          }}
        />
      </div>
    </div>
  );
};

// // Add PropTypes for better development experience
// HistoryRiskBar.defaultProps = {
//   percentage: 0,
//   color: 'bg-[#00B34D]'
// };

// Example usage types
type RiskBarData = {
  title: string;
  value: string;
  percentage: number;
  color: 'bg-[#00B34D]' | 'bg-[#FF4D4F]' | 'bg-[#FFA800]';
};

// Export types for external use
export type { HistoryRiskBarProps, RiskBarData };