// app/wallet-evaluation/[address]/export/page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ExportOptions {
 riskBreakdown: boolean;
 aiInsights: boolean;
 transactionHistory: boolean;
 securityRecommendations: boolean;
 includeVisuals: boolean;
 fileFormat: 'PDF' | 'CSV' | 'EXCEL';
 notes: string;
}

export default function Page() {
 const params = useParams();
 const [options, setOptions] = useState<ExportOptions>({
   riskBreakdown: false,
   aiInsights: false,
   transactionHistory: false,
   securityRecommendations: false,
   includeVisuals: false,
   fileFormat: 'PDF',
   notes: ''
 });
 const [agreedToTerms, setAgreedToTerms] = useState(false);

 const handleGenerateReport = () => {
   if (!agreedToTerms) {
     alert('Please agree to Terms of Service and Privacy Policy');
     return;
   }
   console.log('Generating report with options:', options);
 };

 return (
  <div className="relative min-h-screen">
  {/* Background Image */}
  <div 
    className="fixed top-0 left-0 w-full h-full bg-no-repeat"
    style={{
      backgroundImage: `url('/bg-11.png')`,
      backgroundSize: '100% auto',
      backgroundPosition: 'top center',
      zIndex: -1,
    }}
  />
     <div className="max-w-[1200px] mx-auto px-8 py-12">
       {/* Breadcrumb */}
       <div className="flex items-center gap-2 text-sm mb-8">
         <Link href="/" className="text-[#666666] hover:text-[#0066FF]">
           Home
         </Link>
         <span className="text-[#666666]">/</span>
         <Link 
           href={`/wallet-evaluation/${params.address}`} 
           className="text-[#666666] hover:text-[#0066FF]"
         >
           Wallet Evaluation Result
         </Link>
         <span className="text-[#666666]">/</span>
         <span className="text-[#666666]">{params.address}</span>
         <span className="text-[#666666]">/</span>
         <span className="text-[#666666]">Wallet Evaluation Report Export</span>
       </div>

       {/* Title */}
       <h1 className="text-2xl font-semibold mb-2 text-[#1A1A1A] text-center">Export Report</h1>
       <p className="text-[#666666] mb-8 text-center">
         Customise your report based on your requirements and export.
       </p>

       {/* Section Selection Box */}
       <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
         <h3 className="text-sm mb-4 text-[#1A1A1A] font-albayan font-bold">Choose sections to include in the report</h3>
         <div className="grid grid-cols-3 gap-5 ">
           <label className="flex items-center gap-4 cursor-pointer">
             <input
               type="checkbox"
               className="w-6 h-6 rounded border-gray-300 cursor-pointer"
               checked={options.riskBreakdown}
               onChange={(e) => setOptions({...options, riskBreakdown: e.target.checked})}
             />
             <span className="text-sm">Risk Breakdown</span>
           </label>
           <label className="flex items-center gap-4 cursor-pointer">
             <input
               type="checkbox"
               className="w-6 h-6 rounded border-gray-300 cursor-pointer"
               checked={options.aiInsights}
               onChange={(e) => setOptions({...options, aiInsights: e.target.checked})}
             />
             <span className="text-sm">AI Insights</span>
           </label>
           <label className="flex items-center gap-4 cursor-pointer ">
             <input
               type="checkbox"
               className="w-6 h-6 rounded border-gray-300 cursor-pointer"
               checked={options.transactionHistory}
               onChange={(e) => setOptions({...options, transactionHistory: e.target.checked})}
             />
             <span className="text-sm">Transaction History Overview</span>
           </label>
           <label className="flex items-center gap-4 cursor-pointer">
             <input
               type="checkbox"
               className="w-6 h-6 rounded border-gray-300 bg-[#F9FAFB] cursor-pointer"
               checked={options.securityRecommendations}
               onChange={(e) => setOptions({...options, securityRecommendations: e.target.checked})}
             />
             <span className="text-sm">Security Recommendations</span>
           </label>
         </div>
       </div>

       {/* Notes Box */}
       <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
         <h3 className="text-sm font-bold mb-4 text-[#1A1A1A]">Notes</h3>
         <textarea
           className="w-full h-32 p-4 border border-[#E5E5E5] rounded-lg resize-none focus:outline-none focus:border-[#0066FF] text-sm"
           placeholder="eg. Screen ipsum text"
           value={options.notes}
           onChange={(e) => setOptions({...options, notes: e.target.value})}
         />
       </div>

       {/* Export Options Box */}
       <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
         <div className="flex items-center justify-between">
           <div className='flex gap-4 items-center'>
             <h3 className="text-base font-bold  text-[#1A1A1A]">Select file format</h3>
             <select
               className="px-6 py-2 border border-[#E5E5E5] rounded-lg bg-white text-sm min-w-[150px] cursor-pointer"
               value={options.fileFormat}
               onChange={(e) => setOptions({...options, fileFormat: e.target.value as ExportOptions['fileFormat']})}
             >
               <option value="PDF">PDF</option>
               <option value="CSV">CSV</option>
               <option value="EXCEL">EXCEL</option>
             </select>
           </div>
           <label className="flex items-center gap-6 cursor-pointer">
           <span className="text-base font-bold">Include visual elements</span>
             <input
               type="checkbox"
               className="w-6 h-6 cursor-pointer rounded border-gray-300"
               checked={options.includeVisuals}
               onChange={(e) => setOptions({...options, includeVisuals: e.target.checked})}
             />
            
           </label>
         </div>
       </div>

       {/* Terms and Buttons */}
       <div className="mt-8">
         <label className="flex items-center gap-6 cursor-pointer mb-6">
           <input
             type="checkbox"
             className="w-6 h-6 rounded border-gray-300 cursor-pointer"
             checked={agreedToTerms}
             onChange={(e) => setAgreedToTerms(e.target.checked)}
           />
           <span className="text-sm">
             I agree to{' '}
             <Link href="/terms" className="text-[#0066FF] hover:underline">
               Terms of Services
             </Link>
             {' '}and{' '}
             <Link href="/privacy" className="text-[#0066FF] hover:underline">
               Privacy Policy
             </Link>
           </span>
         </label>

         <div className="flex items-center justify-center gap-4">
           <button 
             className="px-6 py-2.5 text-[#0066FF] hover:bg-[#F4F6FB] rounded-full border-2 transition-colors"
             onClick={() => window.history.back()}
           >
             Cancel
           </button>
           <button 
             className="px-6 py-2.5 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             onClick={handleGenerateReport}
             disabled={!agreedToTerms}
           >
             Generate Report
           </button>
         </div>
       </div>
     </div>
   </div>
 );
}