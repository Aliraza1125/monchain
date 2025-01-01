import React from 'react';

interface HistoryRiskBarProps {
  title: string;
  value: string;
  percentage: number;
  color: 'bg-status-success' | 'bg-status-error' | 'bg-status-warning';
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
      case 'bg-status-error':
        return 'text-status-error';
      case 'bg-status-warning':
        return 'text-status-warning';
      case 'bg-status-success':
        return 'text-status-success';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex flex-col gap-1 sm:gap-1.5">
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <span className="text-gray-600 truncate mr-2">{title}</span>
        <span className={`${getTextColor()} flex-shrink-0 font-medium`}>{value}</span>
      </div>
      <div className="relative h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
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

// Example usage types
type RiskBarData = {
  title: string;
  value: string;
  percentage: number;
  color: 'bg-status-success' | 'bg-status-error' | 'bg-status-warning';
};

// Export types for external use
export type { HistoryRiskBarProps, RiskBarData };