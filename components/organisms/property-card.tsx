"use client";

import { formatPrice } from "@/lib/currency";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function PropertyCard({ property }: { property: any }) {
  const router = useRouter();

  return (
    <div className="bg-[#272727] rounded-[12px] border border-[#262626] py-8 px-6 space-y-6 text-white">
      <div className="rounded-[10px]">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={365}
          height={250}
        />
      </div>

      <div className="space-y-3">
        <div className="bg-[#1A1A1A] rounded-[28px] text-xs border border-[#262626] w-fit px-[12px] py-[6px]">
          <p>{property.location}</p>
        </div>
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-[#999999] text-sm leading-relaxed line-clamp-2">
          {property.description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#999999] text-sm"> Price</p>
          <h4 className="font-medium text-xl">{formatPrice(property.price)}</h4>
        </div>

        <Button
          className="bg-[#009607] hover:bg-[#009607]/90 text-sm font-normal cursor-pointer py-3.5 px-8"
          onClick={() => router.push(`/properties/${property.property_id}`)}
        >
          View Property Details
        </Button>
      </div>
    </div>
  );
}
