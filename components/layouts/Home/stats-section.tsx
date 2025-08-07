"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import StatAbstract from "@/assets/stats-abstract.png";

export function StatsSection() {
  const stats = useMemo(() => [
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
  ], []);

  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number[]>([]);

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

  const animateCounter = useCallback((finalValue: number, index: number) => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(finalValue * easeOutQuart);

      setAnimatedValues(prev => {
        const newValues = [...prev];
        newValues[index] = currentValue;
        return newValues;
      });

      if (progress < 1) {
        animationRef.current[index] = requestAnimationFrame(updateCounter);
      }
    };

    animationRef.current[index] = requestAnimationFrame(updateCounter);
  }, []);

  useEffect(() => {
    if (isVisible) {
      animationRef.current.forEach(id => id && cancelAnimationFrame(id));
      animationRef.current = [];

      stats.forEach((stat, index) => {
        animateCounter(stat.value, index);
      });
    }

    return () => {
      animationRef.current.forEach(id => id && cancelAnimationFrame(id));
      animationRef.current = [];
    };
  }, [isVisible, stats, animateCounter]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#002641] py-16 overflow-hidden"
    >
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