import React from 'react';

interface AIInsightsProps {
  insights: string;
  className?: string;
}

export const AIInsights: React.FC<AIInsightsProps> = ({ 
  insights,
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-6 ${className}`}>
      <h2 className="text-sm sm:text-[20px] font-medium text-[#1A1A1A] mb-3 sm:mb-4">
        AI Insights
      </h2>
      
      <div className="bg-[#F8F9FB] rounded-lg sm:rounded-xl p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-[#666666] leading-5 sm:leading-6">
          {insights}
        </p>
      </div>
    </div>
  );
};

// Export type for reuse
export type { AIInsightsProps };