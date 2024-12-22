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
 // Size configurations
 const sizes = {
   sm: {
     svgSize: 120,
     center: 60,
     radius: 45,
     strokeWidth: 8,
     textSize: 'text-3xl',
     labelSize: 'text-xs'
   },
   md: {
     svgSize: 150,
     center: 75,
     radius: 55,
     strokeWidth: 10,
     textSize: 'text-4xl',
     labelSize: 'text-sm'
   },
   lg: {
     svgSize: 180,
     center: 90,
     radius: 65,
     strokeWidth: 12,
     textSize: 'text-5xl',
     labelSize: 'text-sm'
   }
 };

 const config = sizes[size];
 const circumference = 2 * Math.PI * config.radius;
 const strokeDashoffset = circumference - (percentage / 100) * circumference;

 // Color based on percentage
 const getGradientColors = () => {
   if (percentage >= 70) return ['#00C48C', '#38EF7D'];
   if (percentage >= 50) return ['#FFA800', '#FFD000'];
   return ['#FF4D4F', '#FF7875'];
 };

 const [startColor, endColor] = getGradientColors();
 const textColor = percentage >= 70 ? 'text-[#00C48C]' : percentage >= 50 ? 'text-[#FFA800]' : 'text-[#FF4D4F]';

 return (
   <div className="relative inline-flex items-center justify-center">
     <svg 
       className="transform -rotate-90" 
       width={config.svgSize} 
       height={config.svgSize}
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
         <span className={`${config.labelSize} text-[#666666] mt-1`}>
           Overall Score
         </span>
       )}
     </div>
   </div>
 );
};