'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import makeBlockie from 'ethereum-blockies-base64';
import { useWeb3 } from '@/hooks/useWeb3';

const Header: React.FC = () => {
  const [isEvaluateOpen, setIsEvaluateOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
  const { connectWallet, disconnectWallet, getWalletAddress, isConnected, wallet } = useWeb3();
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wallet?.accounts[0]?.address) {
      const blockie = makeBlockie(wallet.accounts[0].address);
      setAvatarUrl(blockie);
    }
  }, [wallet]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWalletDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEvaluateClick = () => {
    setIsEvaluateOpen(!isEvaluateOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleConnectWallet = async () => {
    await connectWallet();
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="relative">
      <div className="h-[72px] flex items-center justify-between px-4 sm:px-8 lg:px-20 py-2 max-w-[1440px] mx-auto">
        <Link href="/" className="no-underline">
          <Image 
            src="/png-2-trimmed.png"  
            alt="Monchain Logo"
            width={200}       
            height={40}       
            className="h-auto" 
            priority         
          />
        </Link>

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

          <div className="flex items-center gap-3" ref={dropdownRef}>
            {!isConnected ? (
              <button
                onClick={handleConnectWallet}
                className="bg-primary text-white px-6 py-2 rounded-full text-[15px] font-medium cursor-pointer transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="relative flex items-center">
                <button
                  onClick={handleConnectWallet}
                  className="text-[#2F7AD3] px-4 py-2 text-[15px] font-medium cursor-pointer transition-colors"
                >
                  Connect Wallet
                </button>
                <div className="flex items-center">
                  <span className="text-[15px] font-medium text-black px-2">
                    {formatAddress(getWalletAddress())}
                  </span>
                  {avatarUrl && (
                    <div className="flex items-center">
                      <Image
                        src={avatarUrl}
                        alt="Wallet Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      {isWalletDropdownOpen ? (
                        <ChevronDown 
                          className="h-6 w-6 cursor-pointer text-gray-500 ml-2 rotate-180 transition-transform duration-200" 
                          onClick={() => setIsWalletDropdownOpen(false)}
                        />
                      ) : (
                        <ChevronDown 
                          className="h-6 w-6 cursor-pointer text-gray-500 ml-2 transition-transform duration-200" 
                          onClick={() => setIsWalletDropdownOpen(true)}
                        />
                      )}
                    </div>
                  )}
                </div>

                {isWalletDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link href="/profile" onClick={() => setIsWalletDropdownOpen(false)} className="block px-4 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer text-[15px] text-center">
                      Account Settings
                    </Link>
                    <Link href="/notifications" onClick={() => setIsWalletDropdownOpen(false)} className="block px-4 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer text-[15px] text-center">
                      Notifications
                    </Link>
                    <Link href="/support" onClick={() => setIsWalletDropdownOpen(false)} className="block px-4 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer text-[15px] text-center">
                      Support
                    </Link>
                    <div 
                      onClick={disconnectWallet}
                      className="px-4 py-4 text-red-500 hover:bg-gray-50 cursor-pointer text-[15px] text-center"
                    >
                      Disconnect Wallet
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>

        <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#1A1A1A]" />
          ) : (
            <Menu className="h-6 w-6 text-[#1A1A1A]" />
          )}
        </button>
      </div>

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

          {!isConnected ? (
            <button
              onClick={handleConnectWallet}
              className="bg-primary text-white px-6 py-2 rounded-full text-[15px] font-medium cursor-pointer transition-colors w-full"
            >
              Connect Wallet
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-[15px] font-medium text-gray-700">
                  {formatAddress(getWalletAddress())}
                </span>
                {avatarUrl && (
                  <Image
                    src={avatarUrl}
                    alt="Wallet Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
              </div>
              <div className="border-t pt-2">
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  Account Settings
                </div>
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  Notifications
                </div>
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                  Support
                </div>
                <div 
                  onClick={disconnectWallet}
                  className="px-4 py-2 text-red-500 hover:bg-gray-50 cursor-pointer"
                >
                  Disconnect Wallet
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;