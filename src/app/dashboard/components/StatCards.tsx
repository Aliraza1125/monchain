import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

interface StatCardsProps {
  title: string;
  value: string;
  desc: string;
  tooltip: string; // Add the tooltip prop
}

export const StatCards: React.FC<StatCardsProps> = ({ title, value, desc, tooltip }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-start gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
        <h3 className="text-xs sm:text-sm text-gray-600">{title}</h3>
        <Image
          src="/images/info-icon.png"
          width={14}
          height={14}
          alt="info"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-60 cursor-pointer"
          data-tooltip-id={`${title}-tooltip`} // Link this to the Tooltip
        />
        <Tooltip id={`${title}-tooltip`} place="top" content={tooltip} />
      </div>
      <p className="text-xl sm:text-2xl font-semibold text-primary">{value}</p>
      <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">{desc}</p>
    </div>
  );
};
