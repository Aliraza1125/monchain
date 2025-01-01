import React, { useState } from 'react';
import Image from 'next/image';

interface InsightItem {
  id: string;
  text: string;
  timestamp: string;
  severity: 'warning' | 'success';
  isCompleted: boolean;
}

interface AIInsightsProps {
  className?: string;
}

export const AIInsights: React.FC<AIInsightsProps> = ({ className = '' }) => {
  // Mock insights data - in real app, this would come from props or API
  const [insights, setInsights] = useState<InsightItem[]>([
    {
      id: '1',
      text: 'High-risk transaction pattern detected. Consider implementing multi-sig wallet.',
      timestamp: '2024-03-15',
      severity: 'warning',
      isCompleted: false
    },
    {
      id: '2',
      text: 'Security measures successfully implemented. Keep monitoring for unusual activities.',
      timestamp: '2024-03-15',
      severity: 'success',
      isCompleted: false
    },
    {
      id: '3',
      text: 'Consider updating wallet permissions to enhance security.',
      timestamp: '2024-03-15',
      severity: 'success',
      isCompleted: false
    },
    {
      id: '4',
      text: 'Critical: Unusual outbound transaction detected. Review immediately.',
      timestamp: '2024-03-15',
      severity: 'warning',
      isCompleted: false
    }
  ]);

  const handleToggleCompletion = (insightId: string) => {
    setInsights(prevInsights =>
      prevInsights.map(insight =>
        insight.id === insightId 
          ? { ...insight, isCompleted: !insight.isCompleted }
          : insight
      )
    );
  };

  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-6 ${className}`}>
      <h2 className="text-base sm:text-lg font-medium text-[#1A1A1A] mb-4 sm:mb-6">
        AI Insights & Recommendations
      </h2>
      
      <div className="space-y-3 sm:space-y-4">
        {insights.map((insight) => (
          <div 
            key={insight.id} 
            className="flex items-start justify-between gap-3 sm:gap-4 rounded-xl hover:bg-[#F8F9FB] p-2 sm:p-3 transition-colors"
          >
            <div className="flex items-center gap-2 sm:gap-4 flex-1">
              {/* Color Bar */}
              <div 
                className={`w-1.5 sm:w-2 h-8 sm:h-12 rounded-l-full shrink-0 ${
                  insight.severity === 'warning' ? 'bg-[#FF4D4F]' : 'bg-[#00B34D]'
                }`} 
              />
              
              {/* Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={insight.isCompleted}
                  onChange={() => handleToggleCompletion(insight.id)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
                />
                
                <div className="flex-1 flex items-center justify-between">
                  <p className={`text-xs sm:text-sm leading-5 sm:leading-6 ${
                    insight.isCompleted ? 'text-gray-400 line-through' : 'text-[#666666]'
                  }`}>
                    {insight.text}
                  </p>
                  
                  {/* Timestamp and Arrow */}
                  <div className="flex items-center gap-2 sm:gap-8 shrink-0 ml-2">
                    <span className="text-[10px] sm:text-sm text-[#666666]">
                      {insight.timestamp}
                    </span>
                    <Image 
                      src="/images/arrow-right.png" 
                      width={6} 
                      height={6} 
                      alt="View" 
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export types for reuse
export type { AIInsightsProps };