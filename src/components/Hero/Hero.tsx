'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Wallet {
  id: number;
  address: string;
  avatar: string;
  score: number;
  status: string;
  lastSync: string;
}

const Hero: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/wallets');
        setWallets(response.data.wallets);
      } catch (error) {
        console.error('Error fetching wallets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  const handleInputClick = () => {
    setIsDropdownOpen(true);
  };

  const handleCloseClick = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/wallet-evaluation/${searchValue}`);
    }
  };

  const handleWalletClick = (address: string) => {
    router.push(`/wallet-evaluation/${address}`);
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative overflow-hidden min-h-screen ">
      {/* Wave Pattern Background */}
      <div className="absolute top-[40%] w-full h-[100%] overflow-hidden">
        <Image 
          src="/images/wave-pattern.png" 
          alt="Wave Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 py-8 flex flex-col items-center text-center">
        <h1 className="text-[56px] font-albayan font-semibold leading-tight text-black tracking-[-0.02em]">
          AI-Powered Security
          <span className="block text-[36px]">
            <span className="font-light">for Your</span> Crypto Assets
          </span>
        </h1>

        <p className="text-base leading-relaxed text-gray-600 mt-2 mb-6 max-w-[480px]">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Search Container */}
        <form onSubmit={handleSearch} className="relative w-full max-w-[580px]">
          <Image 
            src="/images/search-icon.png" 
            alt="Search" 
            width={20} 
            height={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
          />
          
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter wallet address to evaluate"
            className={`w-full h-[40px] pl-[50px] pr-[60px] ${isDropdownOpen ? 'rounded-t-xl' : 'rounded-xl'} border border-gray-200 bg-white text-base text-gray-900 placeholder-gray-400 transition-all duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:shadow-[0_2px_8px_rgba(59,130,246,0.1)]`}
            onClick={handleInputClick}
          />

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg">
              <div className="p-4">
                <button
                  type="button"
                  onClick={handleCloseClick}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h4 className="text-gray-500 text-start text-xs mb-2">ADDRESSES</h4>
                <ul>
                  {loading ? (
                    <li className="py-2 text-center text-gray-500">Loading...</li>
                  ) : (
                    wallets.map((wallet) => (
                      <li 
                        key={wallet.id} 
                        className="flex items-center py-2 cursor-pointer hover:bg-gray-50 px-2 rounded-lg"
                        onClick={() => handleWalletClick(wallet.address)}
                      >
                        <Image
                          src={wallet.avatar}
                          alt={`Wallet ${wallet.id}`}
                          width={24}
                          height={24}
                          className="mr-3 rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold">{wallet.address}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              wallet.status === 'Profile Safe' ? 'bg-[#E6F7F1] text-[#00B34D]' : 'bg-[#FFF1F1] text-[#FF4D4F]'
                            }`}>
                              {wallet.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">Last sync: {wallet.lastSync}</p>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          )}

          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-50"
          >
            <Image 
              src="/images/submit-icon.png" 
              alt="Submit" 
              width={20} 
              height={20}
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;