"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import HeroImage1 from "@/assets/images/hero_image_1.jpg";
import HeroImage2 from "@/assets/images/hero_image_2.png";

import "swiper/css";

const hero_data = [
  {
    title: "Your Dream Property Is Now\n Within Reach",
    sub_title:
      "Explore exceptional houses & lands across the country. We make buying, selling, or investing seamless and rewarding.",
    image: HeroImage1,
  },
  {
    title: "Creatan Garden:\n Where Property Meets Possibility",
    sub_title:
      "Find the space that fits your future. From serene family homes to high growth investments, Creatan Garden helps you move forward with confidence and peace of mind.",
    image: HeroImage2,
  },
];

export function HeroSection() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    console.log("Search query:", searchQuery);
    // Handle search logic here
  };

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {hero_data.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="text-center text-white px-4 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {slide.title.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== slide.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.sub_title}
                </p>

                <div className="h-8"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 translate-y-8 z-20 flex items-center justify-center mt-8 px-4">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white rounded-3xl p-2 flex items-center max-w-4xl w-full shadow-lg"
        >
          <div className="flex items-center flex-1 px-4">
            <FaLocationDot className="text-[#203239] mr-2 flex-shrink-0" />
            <Input
              name="search"
              type="text"
              placeholder="Search location, properties, residential group"
              className="flex-1 outline-none w-80 text-gray-700 text-sm border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 bg-transparent p-0"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#001D32] hover:bg-[#002641] text-white px-8 py-2 rounded-full cursor-pointer flex-shrink-0"
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
