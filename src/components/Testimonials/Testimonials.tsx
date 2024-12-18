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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 flex flex-col space-y-6">
              <div className={`px-4 py-4 border rounded-xl ${testimonial.bgColor} text-white relative`}>
                <Image
                  src="/images/quote-left.png"
                  alt="Left Quote"
                  width={12}
                  height={12}
                  className="absolute top-2 left-2"
                />
                <p className="text-sm">{testimonial.text}</p>
                <Image
                  src="/images/quote-right.png"
                  alt="Right Quote"
                  width={12}
                  height={12}
                  className="absolute bottom-2 right-2"
                />
              </div>
              <div className="flex items-start space-x-3  bg-white  ">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className={`rounded-lg ${testimonial.bgColor}`}
                />
                <div className=" text-left">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
