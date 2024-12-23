import React from 'react';
import Image from 'next/image';

const SecuritySection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative max-w-[500px] mx-auto lg:mx-0 w-full">
            <div className="p-2 sm:p-4">
              <Image
                src="/images/ai-background.png"
                alt="AI Background"
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
                priority
              />
              {/* Floating Stats Card */}
              <div className="absolute h-[90px] sm:h-[120px] bottom-2 sm:bottom-0 right-0 sm:right-0 bg-blue-500 text-white px-3 sm:px-4 py-3 sm:py-4 w-[140px] sm:w-[160px] rounded-lg shadow-md flex flex-col items-start">
                <div className="flex items-center justify-between w-full">
                  <span className="text-3xl sm:text-4xl font-albayan mr-2">68%</span>
                  <div className="bg-white rounded-full p-1">
                    <Image
                      src="/images/Group.svg" 
                      alt="Arrow"
                      width={12} 
                      height={12}
                      className="w-2 h-2 sm:w-3 sm:h-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-1 sm:mt-2">
                  <span className="text-sm sm:text-base">Extra growth for you.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h4 className="text-[#2F7BD3] uppercase text-sm sm:text-base mb-2">
              About
            </h4>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Security and AI Tech
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.
            </p>
            
            <a 
              href="#" 
              className="inline-block font-semibold text-sm sm:text-base hover:text-blue-500 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;