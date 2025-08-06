import { FaHome, FaBed, FaBath, FaStar, FaQuoteLeft } from "react-icons/fa";
import QuoteIcon from "@/assets/icons/quote.svg";
import Image from "next/image";

interface TestimonialData {
  name: string;
  rating: number;
  size: string;
  bedrooms: number;
  bathrooms: number;
  testimonial: string;
}

interface TestimonialProps {
  testimonial: TestimonialData;
  className?: string;
}

export function Testimonial({ testimonial, className }: TestimonialProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? "text-[#E7AA3D]" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div
      className={`bg-white rounded-xl h-[263px] w-[490px] pt-15 pb-6 px-9 border-[1.5px] border-[#E6E6E6] relative ${className}`}
    >
      {/* Quote Icon */}
      <div className="absolute -top-9 left-6">
        <div className="bg-[#E6F5E6] rounded-full flex items-center justify-center h-18 w-18">
          <Image src={QuoteIcon} alt="Quote Icon" />
        </div>
      </div>

      {/* Customer Info */}
      <div className="flex justify-between items-start mb-3 pt-2">
        <h3 className="font-semibold text-lg text-[#323232]">
          {testimonial.name}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-[#6B6B6B]">
            {testimonial.rating.toFixed(1)}
          </span>
          <div className="flex">{renderStars(testimonial.rating)}</div>
        </div>
      </div>

      {/* Property Details */}
      <div className="flex items-center gap-4 text-sm text-[#6B6B6B] mb-4">
        <div className="flex items-center gap-1">
          <FaHome className="text-xl" />
          <span>{testimonial.size}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBed className="text-xl" />
          <span>{testimonial.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBath className="text-xl" />
          <span>{testimonial.bathrooms} Bathrooms</span>
        </div>
      </div>

      {/* Quote */}
      <p className="text-[#6B6B6B] leading-relaxed text-sm">
        "{testimonial.testimonial}"
      </p>
    </div>
  );
}
