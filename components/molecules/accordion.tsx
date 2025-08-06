"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaPlus, FaMinus } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn("w-full", className)}
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={`item-${index}`}
          className="rounded-lg bg-white data-[state=open]:bg-[#F6F6F6] data-[state=open]:p-10 data-[state=closed]:px-10 data-[state=closed]:pt-8"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between text-left text-2xl font-medium text-[#1A1A1A] focus:outline-none group">
              <span className="flex-1">{item.question}</span>
              <div className="ml-4 flex-shrink-0">
                <FaPlus className="h-4 w-4 text-gray-600 transition-all duration-200 group-data-[state=open]:hidden" />
                <FaMinus className="h-4 w-4 text-gray-600 transition-all duration-200 group-data-[state=closed]:hidden" />
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="text-[#1A1A1A] text-lg leading-relaxed">
              {item.answer}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
