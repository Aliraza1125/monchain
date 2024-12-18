import React from 'react';
import Image from 'next/image';

const AppPromoSection: React.FC = () => {
  return (
    <section className="bg-[#F5F8FF] py-16">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 relative">
          <div className=" rounded-lg  relative">
            <Image
              src="/images/phone-mockup.png"
              alt="Phone Mockup"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 right-16 bottom-8 flex items-center justify-center">
              <span className="text-black font-bold text-xl">Monchain</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-blue-500 uppercase mb-2">Lorem</h4>
          <h2 className="text-3xl font-bold mb-4">Lorem Ipsum text</h2>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="#" className="text-blue-500 font-semibold">Learn More</a>

          {/* App Store Buttons */}
          <div className="flex justify-center md:justify-start mt-6">
            <a href="#" className="mr-4">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={350}
                height={100}
              />
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;