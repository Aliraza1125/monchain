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
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
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
    <section className="bg-[#F5F8FF] py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-2">
              <div className="bg-white p-6 border rounded-3xl flex flex-col gap-4 shadow-lg text-center h-[320px] w-[300px]">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeatureSection;