import React from "react";
import Image from "next/image";

const AppPromoSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 lg-mt-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[280px] sm:w-[400px] lg:w-[500px]">
              <Image
                src="/images/phone-mockup.png"
                alt="Phone Mockup"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
              <div className="absolute inset-0 right-0 sm:right-0 bottom-8 flex items-center justify-center">
                <span className="text-black font-bold text-sm sm:text-xl">
                  Monchain
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-blue-500 uppercase text-sm sm:text-base mb-2">
              Lorem
            </h4>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Lorem Ipsum text
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-[600px] lg:max-w-none">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <a 
              href="#" 
              className="text-blue-500 font-semibold text-sm sm:text-base hover:text-blue-600 transition-colors duration-200"
            >
              Learn More
            </a>

            {/* App Store Button */}
            <div className="mt-6 w-full sm:w-auto">
              <a 
                href="#" 
                className="block w-[250px] sm:w-[250px] lg:w-[350px] mx-auto lg:mx-0"
              >
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={350}
                  height={100}
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;