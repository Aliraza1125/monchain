'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const FeatureSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  const features = [
    {
      icon: '/images/wallet-icon.png',
      title: 'AI-powered wallet and transaction evaluation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: '/images/crypto-icon.png',
      title: 'AI-powered secure crypto transactions',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: '/images/fraud-icon.png',
      title: 'Fraud detection',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      icon: '/images/wallet-manager-icon.png',
      title: 'Wallet Manager',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-2 sm:p-3">
              <div className="bg-white p-4 sm:p-6 border rounded-3xl flex flex-col gap-3 sm:gap-4 shadow-lg text-center h-[280px] sm:h-[300px] lg:h-[320px] w-[260px] sm:w-[280px] lg:w-[300px] mx-auto">
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="mx-auto mb-2 sm:mb-4 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16"
                  />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 line-clamp-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeatureSection;