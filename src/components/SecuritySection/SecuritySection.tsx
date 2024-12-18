import React from 'react';
import Image from 'next/image';

const SecuritySection: React.FC = () => {
  return (
    <section className="bg-[#F5F8FF] py-16">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="p-4 rounded-lg">
            <Image
              src="/images/ai-background.png"
              alt="AI Background"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute h-[120px] bottom-0 right-4 bg-blue-500 text-white py-6 px-4 w-[150px] rounded-lg shadow-md flex flex-col items-start">
              <div className="flex items-center">
                <span className="text-3xl font-semibold mr-2">68%</span>
                <div className="bg-white rounded-full p-1">
                  <Image
                    src="/images/Group.svg" // Path to your custom arrow image
                    alt="Arrow"
                    width={12} // Adjust size as needed
                    height={12}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Extra growth for you.</span>
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h4 className="text-[#2F7BD3] uppercase mb-2">About</h4>
          <h2 className="text-3xl font-bold mb-4">Security and AI Tech</h2>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="#" className="font-semibold">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
