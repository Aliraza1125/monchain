'use client';
import React from 'react';

interface CircleProgressProps {
  percentage: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const CircleProgress: React.FC<CircleProgressProps> = ({ 
  percentage,
  showLabel = true,
  size = 'lg'
}) => {
  // Responsive size configurations
  const sizes = {
    sm: {
      svgSize: {
        mobile: 100,
        tablet: 110,
        desktop: 120
      },
      center: {
        mobile: 50,
        tablet: 55,
        desktop: 60
      },
      radius: {
        mobile: 35,
        tablet: 40,
        desktop: 45
      },
      strokeWidth: {
        mobile: 6,
        tablet: 7,
        desktop: 8
      },
      textSize: 'text-2xl sm:text-2xl md:text-3xl',
      labelSize: 'text-[10px] sm:text-xs'
    },
    md: {
      svgSize: {
        mobile: 120,
        tablet: 135,
        desktop: 150
      },
      center: {
        mobile: 60,
        tablet: 67.5,
        desktop: 75
      },
      radius: {
        mobile: 45,
        tablet: 50,
        desktop: 55
      },
      strokeWidth: {
        mobile: 8,
        tablet: 9,
        desktop: 10
      },
      textSize: 'text-3xl sm:text-3xl md:text-4xl',
      labelSize: 'text-xs sm:text-sm'
    },
    lg: {
      svgSize: {
        mobile: 140,
        tablet: 160,
        desktop: 180
      },
      center: {
        mobile: 70,
        tablet: 80,
        desktop: 90
      },
      radius: {
        mobile: 50,
        tablet: 58,
        desktop: 65
      },
      strokeWidth: {
        mobile: 10,
        tablet: 11,
        desktop: 12
      },
      textSize: 'text-4xl sm:text-4xl md:text-[50px]',
      labelSize: 'text-xs sm:text-[13px]'
    }
  };

  // Get current size configuration based on viewport
  const getCurrentConfig = () => {
    const config = sizes[size];
    return {
      svgSize: `w-[${config.svgSize.mobile}px] sm:w-[${config.svgSize.tablet}px] md:w-[${config.svgSize.desktop}px]`,
      center: config.center.mobile,
      radius: config.radius.mobile,
      strokeWidth: config.strokeWidth.mobile,
      textSize: config.textSize,
      labelSize: config.labelSize
    };
  };

  const config = getCurrentConfig();
  const circumference = 2 * Math.PI * config.radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Updated color thresholds and colors based on new scheme
  // 00-49: High Risk (#FF4843)
  // 49-65: Medium Risk (#FFCD43)
  // 65-100: Low Risk (#00B34D)
  const getGradientColors = () => {
    if (percentage >= 65) return ['#00B34D', '#00B34D'];
    if (percentage >= 49) return ['#FFCD43', '#FFCD43'];
    return ['#FF4843', '#FF4843'];
  };

  const [startColor, endColor] = getGradientColors();
  const textColor = percentage >= 65 ? 'text-[#00B34D]' : 
                   percentage >= 49 ? 'text-[#FFCD43]' : 
                   'text-[#FF4843]';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg 
        className={`transform -rotate-90 ${config.svgSize}`}
        viewBox={`0 0 ${config.center * 2} ${config.center * 2}`}
      >
        {/* Background circle */}
        <circle
          cx={config.center}
          cy={config.center}
          r={config.radius}
          className="fill-none stroke-[#E6F7F1]"
          strokeWidth={config.strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={config.center}
          cy={config.center}
          r={config.radius}
          className="fill-none stroke-[url(#progressGradient)]"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className={`${config.textSize} font-semibold ${textColor}`}>
          {percentage}
        </span>
        {showLabel && (
          <span className={`${config.labelSize} text-[#666666] mt-0.5 sm:mt-1`}>
            Overall Score
          </span>
        )}
      </div>
    </div>
  );
};