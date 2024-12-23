'use client';
import React, { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'privacy', title: 'Your Privacy Matters' },
    { id: 'faq', title: 'Privacy FAQ' },
    { id: 'usage', title: 'Data Usage' },
    { id: 'security', title: 'Security Measures' },
    { id: 'changes', title: 'Policy Updates' },
    { id: 'contact', title: 'Contact Information' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-11.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: '0.8',
          zIndex: -1,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="bg-[#2F7BD3] text-white py-6 sm:py-8 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
          <div className="px-4 sm:px-8">
            <h1 className="text-2xl sm:text-3xl text-center mb-3 sm:mb-4">Privacy Policy</h1>
            <p className="text-center text-white/80 text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-white rounded-lg px-4 py-3 flex justify-between items-center text-[#1A1A1A]"
          >
            <span className="font-medium">Navigate to Section</span>
            <svg
              className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="absolute z-20 left-4 right-4 mt-2 py-2 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-4 py-2 text-[#666666] hover:bg-gray-50 hover:text-[#0066FF] text-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-8">
              <h2 className="font-semibold mb-4 text-[#1A1A1A]">Privacy Policy</h2>
              <nav className="flex flex-col gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-[#666666] hover:text-[#0066FF] text-sm transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
            <section id="overview" className="mb-8 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#1A1A1A]">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-sm sm:text-base text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </section>

            <section id="privacy" className="mb-8 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#1A1A1A]">
                Your Privacy Matters
              </h2>
              <p className="text-sm sm:text-base text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-sm sm:text-base text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </p>
            </section>

            {sections.slice(2).map((section) => (
              <section key={section.id} id={section.id} className="mb-8 sm:mb-12">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#1A1A1A]">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                </p>
                <p className="text-sm sm:text-base text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                  It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}