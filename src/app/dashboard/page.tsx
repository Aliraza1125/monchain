'use client';
import React from 'react';
import { TotalAssets } from './components/TotalAssets';
import { StatCards } from './components/StatCards';
import { WalletManagement } from './components/WalletManagement';
import { InsightsSection } from './components/InsightsSection';

export default function Dashboard() {
  const stats = [
    {
      title: 'Connected Wallets',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The total number of wallets connected to the platform.',
    },
    {
      title: 'Fraud Requests',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The number of detected fraudulent requests.',
    },
    {
      title: 'Pending Evaluations',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The number of evaluations currently in progress.',
    },
    {
      title: 'Completed Evaluations',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The number of evaluations successfully completed.',
    },
    {
      title: 'Highest Fraud Score',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The highest fraud score detected among evaluated wallets.',
    },
    {
      title: 'Lowest Fraud Score',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The lowest fraud score detected among evaluated wallets.',
    },
    {
      title: 'Notifications',
      value: '0000',
      desc: 'Lorem ipsum text',
      tooltip: 'The total number of notifications sent to users.',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-12.png')`,
          backgroundSize: '100% 100%',
          zIndex: -1,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 mb-6 sm:mb-8">
          <div className="order-2 lg:order-1">
            <TotalAssets />
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <StatCards key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <WalletManagement />
        </div>

        {/* Insights Section */}
        <InsightsSection />
      </div>
    </div>
  );
}
