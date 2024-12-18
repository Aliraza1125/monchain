'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputClick = () => {
    setIsDropdownOpen(true);
  };

  const handleCloseClick = () => {
    setIsDropdownOpen(false);
  };
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-b from-white to-[#F5F8FF]">
      {/* Wave Pattern Background */}
      
        <div className="absolute top-[40%] w-full h-[100%] overflow-hidden">
          <Image 
            src="/images/wave-pattern.png" 
            alt="Wave Pattern"
            fill
            className="object-cover  "
            priority
          />
        </div>
   

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-8 flex flex-col items-center text-center">
        <h1 className="text-[56px] font-bold leading-tight text-black tracking-[-0.02em]">
          AI-Powered Security
          <span className="block  text-[36px]"> <span className="font-light">for Your</span> Crypto Assets</span>
        </h1>

        <p className="text-base leading-relaxed text-gray-600 mt-2 mb-6 max-w-[480px]">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Search Container */}
        <div className="relative w-full max-w-[580px]">
          <Image 
            src="/images/search-icon.png" 
            alt="Search" 
            width={20} 
            height={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
          />
          
          <input
            type="text"
            placeholder="Enter wallet address to evaluate"
            className={`w-full h-[48px] pl-[50px] pr-[60px] ${isDropdownOpen ? 'rounded-t-xl' : 'rounded-xl'} border border-gray-200 bg-white text-base text-gray-900 placeholder-gray-400 transition-all duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:shadow-[0_2px_8px_rgba(59,130,246,0.1)]`}
            onClick={handleInputClick}
          />

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0  bg-white border border-gray-200 rounded-b-lg shadow-lg">
              <div className="p-4">
              <button
                  onClick={handleCloseClick}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h4 className="text-gray-500  text-start text-xs mb-2">ADDRESSES</h4>
                <ul>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index} className="flex items-center py-2">
                      <Image
                        src="/images/wallet-icon.png" // Replace with actual icon paths
                        alt="Wallet Icon"
                        width={24}
                        height={24}
                        className="mr-3"
                      />
                      <div>
                        <p className="text-sm font-bold">Lorem Ipsum Wallet</p>
                        <p className="text-xs text-gray-500">0x3y4hd83...12h31h12</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
            <Image 
              src="/images/submit-icon.png" 
              alt="Submit" 
              width={20} 
              height={20}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;