'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWeb3 } from '@/hooks/useWeb3';

const FRAUD_TYPES = [
  'Phishing',
  'Hack',
  'Stolen Private Keys',
  'Unauthorized Transaction',
  'Smart Contract Exploit',
  'Other'
];

interface FraudReport {
  walletAddress: string;
  fraudType: string;
  recipientAddress?: string;
  transactionIds: string[];
  additionalInfo: string;
  agreedToTerms: boolean;
}

export default function ReportFraud() {
  const router = useRouter();
  const { wallet, isConnected } = useWeb3();
  const [report, setReport] = useState<FraudReport>({
    walletAddress: '',
    fraudType: '',
    recipientAddress: '',
    transactionIds: [''],
    additionalInfo: '',
    agreedToTerms: false
  });

  // Prefill wallet address if connected
  useEffect(() => {
    if (isConnected && wallet?.accounts[0]?.address) {
      setReport(prev => ({
        ...prev,
        walletAddress: wallet.accounts[0].address
      }));
    }
  }, [isConnected, wallet]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'agreedToTerms') {
      setReport(prev => ({
        ...prev,
        agreedToTerms: (e.target as HTMLInputElement).checked
      }));
    } else if (name === 'transactionIds') {
      setReport(prev => ({
        ...prev,
        transactionIds: value.split(',').map(id => id.trim())
      }));
    } else {
      setReport(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual submission logic
    console.log('Fraud Report Submitted:', report);
    
    // Redirect to main page
    router.push('/');
  };

  const addTransactionId = () => {
    setReport(prev => ({
      ...prev,
      transactionIds: [...prev.transactionIds, '']
    }));
  };

  const updateTransactionId = (index: number, value: string) => {
    const newTransactionIds = [...report.transactionIds];
    newTransactionIds[index] = value;
    setReport(prev => ({
      ...prev,
      transactionIds: newTransactionIds
    }));
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-9.png')`,
          backgroundSize: '100% 100%',
          zIndex: -1,
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-2xl relative z-10">
        <h1 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Report Fraud</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          {/* Wallet Address Input */}
          <div>
            <label htmlFor="walletAddress" className="block mb-2 text-[#1A1A1A]">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={report.walletAddress}
              onChange={handleInputChange}
              placeholder="Enter wallet address"
              className="input-base"
              required
            />
          </div>

          {/* Fraud Type Dropdown */}
          <div>
            <label htmlFor="fraudType" className="block mb-2 text-[#1A1A1A]">
              Type of Fraud
            </label>
            <select
              id="fraudType"
              name="fraudType"
              value={report.fraudType}
              onChange={handleInputChange}
              className="input-base"
              required
            >
              <option value="">Select Fraud Type</option>
              {FRAUD_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Recipient Address (for Phishing) */}
          {report.fraudType === 'Phishing' && (
            <div>
              <label htmlFor="recipientAddress" className="block mb-2 text-[#1A1A1A]">
                Recipient Address
              </label>
              <input
                type="text"
                id="recipientAddress"
                name="recipientAddress"
                value={report.recipientAddress || ''}
                onChange={handleInputChange}
                placeholder="Enter recipient wallet address"
                className="input-base"
              />
            </div>
          )}

          {/* Transaction IDs */}
          <div>
            <label className="block mb-2 text-[#1A1A1A]">Transaction IDs</label>
            {report.transactionIds.map((txId, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={txId}
                  onChange={(e) => updateTransactionId(index, e.target.value)}
                  placeholder={`Transaction ID ${index + 1}`}
                  className="input-base mr-2 flex-grow"
                />
                {index === report.transactionIds.length - 1 && (
                  <button
                    type="button"
                    onClick={addTransactionId}
                    className="btn-primary px-3 py-2"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additionalInfo" className="block mb-2 text-[#1A1A1A]">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={report.additionalInfo}
              onChange={handleInputChange}
              placeholder="Provide any additional details about the fraud"
              className="input-base h-24"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreedToTerms"
              name="agreedToTerms"
              checked={report.agreedToTerms}
              onChange={handleInputChange}
              className="mr-2 text-[#2F7AD3] focus:ring-[#2F7AD3]"
              required
            />
            <label htmlFor="agreedToTerms" className="text-[#1A1A1A]">
              I agree to the{' '}
              <a href="/terms-and-conditions" target="_blank" className="link-primary underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!report.agreedToTerms}
            className="btn-primary w-full py-3"
          >
            Submit Fraud Report
          </button>
        </form>
      </div>
    </div>
  );
}