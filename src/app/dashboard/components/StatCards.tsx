// components/StatCards.tsx
import React from 'react';
import Image from 'next/image';

interface StatCardsProps {
  title: string;
  value: string;
  desc: string;
}

export const StatCards: React.FC<StatCardsProps> = ({ title, value, desc }) => {
  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex items-center justify-start gap-2 mb-2">
        <h3 className="text-sm text-[#666666]">{title}</h3>
        <Image
          src="/images/info-icon.png"
          width={16}
          height={16}
          alt="info"
        />
      </div>
      <p className="text-2xl font-semibold text-[#0066FF]">{value}</p>
      <p className="text-xs text-[#666666] mt-1">{desc}</p>
    </div>
  );
};