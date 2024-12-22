'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header: React.FC = () => {
  const [isEvaluateOpen, setIsEvaluateOpen] = useState(false);


  const handleEvaluateClick = () => {
    // Toggle dropdown state
    setIsEvaluateOpen(!isEvaluateOpen);
 
  };

  return (
    <header className="bg-gradient-to-r from-[#F4F6FB] to-[#F2F3FD]">
      <div className="h-[72px] flex items-center justify-between px-12 py-2 max-w-[1440px] mx-auto">
        <Link href="/" className="text-xl font-semibold text-[#1A1A1A] no-underline">
          Monchain
        </Link>

        <nav className="flex items-center gap-8">
          <button 
            className="text-[15px] font-medium text-[#1A1A1A] flex items-center gap-2 hover:text-[#0066FF]"
            onClick={handleEvaluateClick}
          >
            Evaluate Wallet
            <Image 
              src="/images/downarrow.svg"
              width={12}
              height={12}
              alt=""
              className={`transition-transform duration-200 ${isEvaluateOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          <Link 
            href="/report-fraud" 
            className="text-[15px] font-medium text-[#1A1A1A] flex items-center gap-1 hover:text-[#0066FF]"
          >
            Report Fraud
          </Link>

          <button className="bg-[#2F7BD3] text-white px-6 py-2 rounded-full text-[15px] font-medium cursor-pointer transition-colors hover:bg-[#0052CC]">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;