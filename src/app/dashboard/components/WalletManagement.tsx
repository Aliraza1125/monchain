import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface WalletCard {
  id: string;
  name: string;
  address: string;
  securityScore: string;
  riskLevel: string;
}

export const WalletManagement = () => {
  const router = useRouter();

  const initialWallets: WalletCard[] = [
    {
      id: '1',
      name: "Wallet 1",
      address: "0xe9c69c...047de1d724",
      securityScore: "69",
      riskLevel: "Low Risk"
    },
    {
      id: '2',
      name: "Wallet 2",
      address: "0x7d8f3a...892ae3b851",
      securityScore: "85",
      riskLevel: "Low Risk"
    },
    {
      id: '3',
      name: "Wallet 3",
      address: "0x4b2e7d...c91fd4a362",
      securityScore: "45",
      riskLevel: "High Risk"
    },
    {
      id: '4',
      name: "Wallet 4",
      address: "0x9a1c5b...734ef2d193",
      securityScore: "92",
      riskLevel: "Low Risk"
    },
    {
      id: '5',
      name: "Wallet 5",
      address: "0x3f8e2d...156bc9a847",
      securityScore: "78",
      riskLevel: "Low Risk"
    }
  ];

  const [wallets, setWallets] = useState<WalletCard[]>(initialWallets);
  const [evaluationWalletId, setEvaluationWalletId] = useState<string | null>(null);

  const deleteWallet = async (id: string) => {
    try {
      // TODO: When backend is ready, add API call here
      // await api.deleteWallet(id);
      
      // Remove wallet from UI
      setWallets(currentWallets => 
        currentWallets.filter(wallet => wallet.id !== id)
      );
    } catch (error) {
      console.error('Error deleting wallet:', error);
      // TODO: Add error handling/notification
    }
  };

  const handleEvaluate = (id: string) => {
    setEvaluationWalletId(id);
  };

  const confirmEvaluation = () => {
    if (evaluationWalletId) {
      const selectedWallet = wallets.find(wallet => wallet.id === evaluationWalletId);
      router.push(`/wallet-evaluation/${selectedWallet?.address}`);
      setEvaluationWalletId(null);
    }
  };

  const handleInfo = (id: string) => {
    // TODO: Implement info functionality
    console.log('Show info for wallet:', id);
  };

  return (
    <div>
      {/* Confirmation Dialog */}
      {evaluationWalletId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Confirm Wallet Evaluation</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to submit this wallet for evaluation? 
              This will initiate a comprehensive security assessment.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setEvaluationWalletId(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button 
                onClick={confirmEvaluation}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:my-6">
        <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-0">
          Wallet Management
        </h2>
        <button className="flex items-center gap-1.5 sm:gap-2 bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-primary-hover transition-colors text-xs sm:text-sm">
          <span className="text-sm sm:text-base">+</span>
          Add Wallet
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-sm transition-shadow">
            {/* Header with Wallet Info */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image
                src={
                  wallet.id === '1' ? "/images/wallet-avatar.png" :
                  wallet.id === '2' ? "/images/wallet-avatar1.png" :
                  wallet.id === '3' ? "/images/wallet-avatar2.png" :
                  wallet.id === '4' ? "/images/wallet-avatar3.png" :
                  "/images/wallet-avatar.png"
                }
                width={28}
                height={28}
                alt={wallet.name}
                className="rounded-full w-7 h-7 sm:w-8 sm:h-8"
              />
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-900">{wallet.name}</h3>
                <p className="text-[10px] sm:text-xs text-gray-600">{wallet.address}</p>
              </div>
            </div>

            {/* Score Section */}
            <div className="flex justify-between mb-3 sm:mb-4">
              <div>
                <p className="text-[10px] sm:text-xs text-gray-600">Security Score</p>
                <p className="text-xs sm:text-sm text-gray-900">{wallet.securityScore}</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-600">Risk Level</p>
                <p className={`text-xs sm:text-sm ${wallet.riskLevel === 'High Risk' ? 'text-red-600' : 'text-green-600'}`}>
                  {wallet.riskLevel}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-1.5 sm:gap-2">
              <button 
                onClick={() => deleteWallet(wallet.id)}
                className="flex items-center justify-center hover:bg-gray-50 transition-colors rounded-lg"
              >
                <Image
                  src="/images/evaluate-icon.png"
                  width={20}
                  height={20}
                  alt="Delete"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
              
              <button 
                onClick={() => handleEvaluate(wallet.id)}
                className="flex-1 flex items-center gap-1.5 sm:gap-2 bg-primary hover:bg-primary-hover 
                          rounded-full py-1.5 sm:py-2 transition-colors"
              >
                <span className="flex-1 text-xs sm:text-sm text-white">Evaluate</span>
              </button>
              
              <button 
                onClick={() => handleInfo(wallet.id)}
                className="bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/images/info-icon1.png"
                  width={20}
                  height={20}
                  alt="Info"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};