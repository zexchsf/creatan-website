"use client";

import { Testimonial } from "@/components/molecules/testimonial";
import { testimonials } from "@/lib/data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TestimonialsSection() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-16 bg-inherit">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#323232] mb-4">
            What our customers say?
          </h2>
          <p className="text-lg font-medium text-[#6B6B6B]">
            Hear from our satisfied and happy clients
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            breakpoints={{
              768: {
                slidesPerView: "auto",
              },
              1024: {
                slidesPerView: "auto",
              },
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            className="testimonials-swiper relative overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="!w-[490px] h-[300px] relative overflow-visible"
              >
                <Testimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className={`swiper-button-prev-custom rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                isBeginning
                  ? "bg-[#DFDFDF] w-[50px] h-[50px]"
                  : "bg-[#323232] hover:bg-[#404040] w-[56px] h-[56px]"
              }`}
            >
              <FaChevronLeft
                className={`text-sm ${
                  isBeginning ? "text-[#838383]" : "text-[#E2E2E2]"
                }`}
              />
            </button>
            <button
              className={`swiper-button-next-custom rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                isEnd
                  ? "bg-[#DFDFDF] w-[50px] h-[50px]"
                  : "bg-[#323232] hover:bg-[#404040] w-[56px] h-[56px]"
              }`}
            >
              <FaChevronRight
                className={`text-sm ${
                  isEnd ? "text-[#838383]" : "text-[#E2E2E2]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
