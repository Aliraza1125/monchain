// app/wallet-evaluation/[address]/export/page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import jsPDF from 'jspdf';

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

  const doc = new jsPDF();

  // Add title
  doc.setFontSize(20);
  doc.text('Wallet Evaluation Report', 105, 20, { align: 'center' });

  // Add sections based on options
  let yOffset = 40; // Vertical offset
  if (options.riskBreakdown) {
    doc.setFontSize(14);
    doc.text('Risk Breakdown:', 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text('Dummy risk breakdown data goes here.', 10, yOffset);
    yOffset += 20;
  }

  if (options.aiInsights) {
    doc.setFontSize(14);
    doc.text('AI Insights:', 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text('Dummy AI insights data goes here.', 10, yOffset);
    yOffset += 20;
  }

  if (options.transactionHistory) {
    doc.setFontSize(14);
    doc.text('Transaction History Overview:', 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text('Dummy transaction history data goes here.', 10, yOffset);
    yOffset += 20;
  }

  if (options.securityRecommendations) {
    doc.setFontSize(14);
    doc.text('Security Recommendations:', 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text('Dummy security recommendations data goes here.', 10, yOffset);
    yOffset += 20;
  }

  // Add notes
  if (options.notes) {
    doc.setFontSize(14);
    doc.text('Notes:', 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(options.notes, 10, yOffset);
    yOffset += 20;
  }

  // Save the PDF
  doc.save('Wallet_Evaluation_Report.pdf');
};

 return (
  <div className="relative">
  {/* Background with content */}
  <div 
    className="fixed top-0 left-0 w-full h-full bg-no-repeat"
    style={{
      backgroundImage: `url('/bg-11.png')`,
      backgroundSize: '100% 100%',
      zIndex: -1,
    }}
  />
     <div className="max-w-[1200px] h-full mx-auto px-0 py-12">
       {/* Breadcrumb */}
       <div className="flex items-center gap-2 text-[20px] mb-8">
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
       <h1 className="text-4xl font-semibold mb-2 text-[#1A1A1A] text-center">Export Report</h1>
       <p className="text-[#666666] mb-8 text-center text-2xl">
         Customise your report based on your requirements and export.
       </p>

       {/* Section Selection Box */}
       <div className="bg-white rounded-xl p-6 mb-4 shadow-sm">
         <h3 className="text-2xl mb-4 text-[#1A1A1A] font-albayan font-bold">Choose sections to include in the report</h3>
         <div className="grid grid-cols-3 gap-5 py-4">
           <label className="flex items-center gap-4 cursor-pointer">
             <input
               type="checkbox"
               className="w-7 h-7 rounded border-gray-300 cursor-pointer"
               checked={options.riskBreakdown}
               onChange={(e) => setOptions({...options, riskBreakdown: e.target.checked})}
             />
             <span className="text-base">Risk Breakdown</span>
           </label>
           <label className="flex items-center gap-4 cursor-pointer">
             <input
               type="checkbox"
               className="w-7 h-7 rounded border-gray-300 cursor-pointer"
               checked={options.aiInsights}
               onChange={(e) => setOptions({...options, aiInsights: e.target.checked})}
             />
             <span className="text-base">AI Insights</span>
           </label>
           <label className="flex items-center gap-4 cursor-pointer ">
             <input
               type="checkbox"
               className="w-7 h-7 rounded border-gray-300 cursor-pointer"
               checked={options.transactionHistory}
               onChange={(e) => setOptions({...options, transactionHistory: e.target.checked})}
             />
             <span className="text-base">Transaction History Overview</span>
           </label>
           <label className="flex items-center gap-4 cursor-pointer">
             <input
               type="checkbox"
               className="w-7 h-7 rounded border-gray-300 bg-[#f5f5fa] cursor-pointer"
               checked={options.securityRecommendations}
               onChange={(e) => setOptions({...options, securityRecommendations: e.target.checked})}
             />
             <span className="text-base">Security Recommendations</span>
           </label>
         </div>
       </div>

       {/* Notes Box */}
       <div className="bg-white rounded-xl p-6 mb-4 shadow-sm">
         <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Notes</h3>
         <textarea
           className="w-full h-32 p-4 border border-[#E5E5E5] rounded-lg resize-none focus:outline-none focus:border-[#0066FF] text-base bg-[#f5f5fa]"
           placeholder="eg. Screen ipsum text"
           value={options.notes}
           onChange={(e) => setOptions({...options, notes: e.target.value})}
         />
       </div>

       {/* Export Options Box */}
       <div className="bg-white rounded-xl p-6 mb-4 shadow-sm">
         <div className="flex items-center justify-between">
           <div className='flex gap-8 items-center'>
             <h3 className="text-2xl font-bold  text-[#1A1A1A]">Select file format</h3>
             <select
               className="px-6 py-2 border border-[#E5E5E5] rounded-lg bg-white text-base min-w-[150px] cursor-pointer text-[#2F7BD3]"
               value={options.fileFormat}
               onChange={(e) => setOptions({...options, fileFormat: e.target.value as ExportOptions['fileFormat']})}
             >
               <option value="PDF">PDF</option>
               <option value="CSV">CSV</option>
               <option value="EXCEL">EXCEL</option>
             </select>
           </div>
           <label className="flex items-center gap-6 cursor-pointer">
           <span className="text-2xl font-bold">Include visual elements</span>
             <input
               type="checkbox"
               className="w-7 h-7 cursor-pointer rounded border-gray-300"
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
             className="w-7 h-7 rounded border-gray-300 cursor-pointer"
             checked={agreedToTerms}
             onChange={(e) => setAgreedToTerms(e.target.checked)}
           />
           <span className="text-2xl text-[#626262]">
             I agree to{' '}
             <Link href="/terms" className="text-black hover:underline font-semibold">
               Terms of Services
             </Link>
             {' '}and{' '}
             <Link href="/privacy" className="text-black hover:underline font-semibold  ">
               Privacy Policy
             </Link>
           </span>
         </label>

         <div className="flex items-center justify-center gap-12 mt-8">
           <button 
             className="px-8 py-2.5 text-[#0066FF] hover:bg-[#F4F6FB] rounded-full border-2 transition-colors text-xl"
             onClick={() => window.history.back()}
           >
             Cancel
           </button>
           <button 
             className="px-8 py-2.5 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xl"
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