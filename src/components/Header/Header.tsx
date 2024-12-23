'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isEvaluateOpen, setIsEvaluateOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEvaluateClick = () => {
    setIsEvaluateOpen(!isEvaluateOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative">
      <div className="h-[72px] flex items-center justify-between px-4 sm:px-8 lg:px-12 py-2 max-w-[1440px] mx-auto">
        <Link href="/" className="text-xl font-semibold text-[#1A1A1A] no-underline">
          Monchain
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#1A1A1A]" />
          ) : (
            <Menu className="h-6 w-6 text-[#1A1A1A]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-[72px] left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4 z-50">
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

          <button className="bg-[#2F7BD3] text-white px-6 py-2 rounded-full text-[15px] font-medium cursor-pointer transition-colors hover:bg-[#0052CC] w-full">
            Connect Wallet
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;