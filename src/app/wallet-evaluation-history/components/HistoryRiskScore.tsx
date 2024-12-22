// components/HistoryRiskScore.tsx
import React from 'react';

interface HistoryRiskScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const HistoryRiskScore: React.FC<HistoryRiskScoreProps> = ({
  score,
  size = 'md',
  showLabel = true,
}) => {
  // Dynamic size configurations
  const sizeConfig = {
    sm: {
      width: 24,
      height: 24,
      viewBox: 96,
      radius: 44,
      strokeWidth: 6,
      fontSize: 'text-2xl',
      labelSize: 'text-xs'
    },
    md: {
      width: 32,
      height: 32,
      viewBox: 112,
      radius: 50,
      strokeWidth: 8,
      fontSize: 'text-4xl',
      labelSize: 'text-sm'
    },
    lg: {
      width: 40,
      height: 40,
      viewBox: 128,
      radius: 56,
      strokeWidth: 10,
      fontSize: 'text-5xl',
      labelSize: 'text-base'
    }
  };

  const config = sizeConfig[size];
  const circumference = 2 * Math.PI * config.radius;
  const progress = (score / 100) * circumference;
  const strokeDashoffset = circumference - progress;

  // Color based on score
  const getScoreColor = () => {
    if (score >= 70) return 'stroke-[#00B34D]';
    if (score >= 50) return 'stroke-[#FFA800]';
    return 'stroke-[#FF4D4F]';
  };

  const getTextColor = () => {
    if (score >= 70) return 'text-[#00B34D]';
    if (score >= 50) return 'text-[#FFA800]';
    return 'text-[#FF4D4F]';
  };

  return (
    <div className="relative inline-flex">
      <svg 
        className={`w-${config.width} h-${config.height} transform -rotate-90`} 
        viewBox={`0 0 ${config.viewBox} ${config.viewBox}`}
      >
        {/* Background circle */}
        <circle
          cx={config.viewBox / 2}
          cy={config.viewBox / 2}
          r={config.radius}
          className={`fill-none stroke-[#E6F7F1] stroke-[${config.strokeWidth}]`}
        />
        {/* Progress circle */}
        <circle
          cx={config.viewBox / 2}
          cy={config.viewBox / 2}
          r={config.radius}
          className={`fill-none ${getScoreColor()} stroke-[${config.strokeWidth}]`}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
        <span className={`${config.fontSize} font-semibold ${getTextColor()}`}>
          {score}
        </span>
        {showLabel && (
          <span className={`${config.labelSize} text-[#666666] mt-1`}>
            Overall Score
          </span>
        )}
      </div>
    </div>
  );
};

// // Default props
// HistoryRiskScore.defaultProps = {
//   size: 'md',
//   showLabel: true
// };

// Example usage types
type ScoreConfig = {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
};

// Export types for external use
export type { HistoryRiskScoreProps, ScoreConfig };