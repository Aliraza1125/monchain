"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      name: "Ben Stokes",
      role: "Member",
      image: "/images/ben-stokes.png",
      bgColor: "bg-[#2F7BD3]",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      name: "Ben Stokes",
      role: "Member",
      image: "/images/ben-stokes.png",
      bgColor: "bg-[#F25A71]",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      name: "Ben Stokes",
      role: "Member",
      image: "/images/ben-stokes.png",
      bgColor: "bg-[#2F7BD3]",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          What People Say
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-[600px] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="px-0 sm:px-2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-2 sm:p-4">
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <div 
                    className={`px-3 sm:px-4 py-3 sm:py-4 border rounded-xl ${testimonial.bgColor} text-white relative min-h-[120px] sm:min-h-[140px] flex items-center justify-center`}
                  >
                    <Image
                      src="/images/quote-left.png"
                      alt="Left Quote"
                      width={12}
                      height={12}
                      className="absolute top-2 left-2 w-2 sm:w-3 h-2 sm:h-3"
                    />
                    <p className="text-xs sm:text-sm px-4">
                      {testimonial.text}
                    </p>
                    <Image
                      src="/images/quote-right.png"
                      alt="Right Quote"
                      width={12}
                      height={12}
                      className="absolute bottom-2 right-2 w-2 sm:w-3 h-2 sm:h-3"
                    />
                  </div>

                  <div className="flex items-start space-x-3 bg-white px-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className={`rounded-lg ${testimonial.bgColor} w-12 sm:w-[60px] h-12 sm:h-[60px]`}
                    />
                    <div className="text-left">
                      <p className="font-bold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;