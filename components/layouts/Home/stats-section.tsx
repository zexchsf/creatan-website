"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import StatAbstract from "@/assets/stats-abstract.png";

export function StatsSection() {
  const stats = [
    {
      value: 20,
      suffix: "+",
      label: "Years in the industry",
    },
    {
      value: 1200,
      suffix: "",
      label: "Satisfied Clients",
    },
    {
      value: 90,
      suffix: "%",
      label: "Customer satisfaction",
    },
    {
      value: 10,
      suffix: "k",
      label: "Properties sold",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = end;
              return newValues;
            });
            clearInterval(timer);
          } else {
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = Math.floor(start);
              return newValues;
            });
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible, stats]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#002641] py-16 overflow-hidden"
    >
      {/* Background abstract images */}
      <div className="absolute left-0 top-0 -bottom-20">
        <Image
          src={StatAbstract}
          alt="Stats Abstract"
          width={300}
          height={300}
          className="object-contain h-full w-auto"
        />
      </div>
      <div className="absolute right-0 top-0 -bottom-20 ">
        <Image
          src={StatAbstract}
          alt="Stats Abstract"
          width={300}
          height={300}
          className="object-contain h-full w-auto"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-[72px] flex-wrap">
          {stats.map((stat, index) => (
            <div key={index} className="text-[#FAFAFA]">
              <div className="text-4xl md:text-[56px] font-semibold">
                {animatedValues[index]}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
