'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServerError = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-5.png')`,
          backgroundSize: '100% 100%',
          zIndex: -1,
        }}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[500px] h-[300px]">
          <Image
            src="/images/505-error.png" // Replace with your 505 error image
            alt="505 Server Error"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-6xl text-[#171717] mb-2">Whoops!</p>
        <p className="text-[#171717] text-xl mb-8">
          Server error! Please try reloading the page.
        </p>
        <Link href="/" className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-12 rounded-full">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ServerError;
