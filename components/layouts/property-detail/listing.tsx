"use client";

import { Badge } from "@/components/ui/badge";
import { Square } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { formatPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { PiBathtubFill } from "react-icons/pi";
import { Property } from "@/types/property";

interface ListingsProps {
  property: Property;
}

export function Listing({ property }: ListingsProps) {
  const [image, setImage] = useState({
    src: property?.images?.[0],
    index: 0,
  });

  useEffect(() => {
    setImage({
      src: property?.images?.[0] || "",
      index: 0,
    });
  }, [property?.images]);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="overflow-hidden bg-white">
        <div className="p-0">
          <div className="flex justify-between items-center py-6 pb-4">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-medium text-[#323232]">
                {property?.title}
              </h1>
              <Badge variant="outline" className="p-2 text-sm font-normal">
                <FaLocationDot className="w-3 h-3 mr-1" />
                {property?.location}
              </Badge>
            </div>
            <div className="text-left">
              <p className="text-sm text-[#464646]">Price</p>
              <p className="text-xl font-medium text-[#323232]">
                {formatPrice(property?.price || 0)}
              </p>
            </div>
          </div>

          <div className=" bg-[#1A1A1A] p-10 rounded-xl overflow-hidden">
            <div className="flex gap-2 overflow-x-auto">
              {property?.images.map(
                (image_url: string | StaticImageData, key: number) => (
                  <div
                    className="relative cursor-pointer"
                    key={key}
                    onClick={() =>
                      setImage({
                        src: image_url,
                        index: key,
                      })
                    }
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-[#0A0A0A80] z-10 pointer-events-none",
                        {
                          hidden: key === image.index,
                        }
                      )}
                    ></div>
                    <Image
                      src={image_url}
                      width={122}
                      height={74}
                      alt={property?.title || "Property Image"}
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-8">
              <div className="aspect-[4/3] h-[500px] w-full rounded overflow-hidden relative">
                <Image
                  src={image.src}
                  alt={property?.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                className={`rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                  image.index === 0
                    ? "bg-[#DFDFDF] w-[50px] h-[50px] cursor-not-allowed"
                    : "bg-[#323232] hover:bg-[#404040] w-[56px] h-[56px]"
                }`}
                disabled={image.index === 0}
                onClick={() => {
                  if (image.index > 0) {
                    const newIndex = image.index - 1;
                    setImage({
                      src: property?.images[newIndex],
                      index: newIndex,
                    });
                  }
                }}
              >
                <FaChevronLeft
                  className={`text-sm ${
                    image.index === 0 ? "text-[#838383]" : "text-[#E2E2E2]"
                  }`}
                />
              </button>
              <div className="flex gap-1">
                {property?.images?.map((img: string | StaticImageData, i: number) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === image.index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                className={`rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                  image.index + 1 === property?.images?.length
                    ? "bg-[#DFDFDF] w-[50px] h-[50px] cursor-not-allowed"
                    : "bg-[#323232] hover:bg-[#404040] w-[56px] h-[56px]"
                }`}
                disabled={image.index + 1 === property?.images?.length}
                onClick={() => {
                  if (image.index + 1 < property?.images?.length) {
                    const newIndex = image.index + 1;
                    setImage({
                      src: property?.images[newIndex],
                      index: newIndex,
                    });
                  }
                }}
              >
                <FaChevronRight
                  className={`text-sm ${
                    image.index + 1 === property?.images?.length
                      ? "text-[#838383]"
                      : "text-[#E2E2E2]"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="p-6 pt-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#323232] mb-3">
                  Description
                </h3>
                <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
                  {property?.description}
                </p>

                {/* Property Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#6B6B6B]">
                      <FaBed className="text-xl" />
                      <span className="text-sm">Bedrooms</span>
                    </div>
                    <span className="font-medium text-[#323232] text-xl">
                      {property?.bedrooms < 10
                        ? `0${property?.bedrooms}`
                        : property?.bedrooms}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#6B6B6B]">
                      <PiBathtubFill className="text-xl" />
                      <span className="text-sm">Bathrooms</span>
                    </div>
                    <span className="font-medium text-[#323232] text-xl">
                      {property?.bathrooms < 10
                        ? `0${property?.bathrooms}`
                        : property?.bathrooms}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#6B6B6B]">
                      <Square className="text-xl" />
                      <span className="text-sm">Square Feet</span>
                    </div>
                    <span className="font-medium text-[#323232] text-xl">
                      {property?.area?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#323232] mb-10">
                  Key Features and Amenities
                </h3>
                <div className="space-y-5">
                  {property?.features?.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 border-l border-[#33AB39] bg-[#F2F2F2] text-[#6B6B6B] pl-5 py-3.5"
                      >
                        <HiLightningBolt className="text-xl" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
