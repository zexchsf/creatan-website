"use client";

import { PropertyCard } from "@/components/organisms/property-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { properties } from "@/lib/data";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHouseChimney, FaLocationDot, FaMoneyBills } from "react-icons/fa6";
import { IoCubeSharp } from "react-icons/io5";

export function Listings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [propertySizeFilter, setPropertySizeFilter] = useState("");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    // Add more filtering logic here based on the filters
    return matchesSearch;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className=" p-8 mb-8">
          <div className="flex flex-col gap-6">
            <div className="relative bg-[#F1F1F1]">
              <Input
                placeholder="Search For A Property"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" bg-[#F1F1F1] h-14 text-base rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 bg-[#009607] hover:bg-[#009607]/90 text-white font-medium rounded-lg">
                <FaSearch />
                Find Property
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#E6F5E6] p-3">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="px-4 py-3.5 w-full bg-[#8ACF8D] border border-[#6B6B6B] text-green-800 rounded-xl">
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="w-4 h-4 text-[#464646]" />
                    <span className="h-5 w-px bg-[#6B6B6B] mx-1" />
                    <SelectValue placeholder="Location" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eti-osa">Eti-osa</SelectItem>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={propertyTypeFilter}
                onValueChange={setPropertyTypeFilter}
              >
                <SelectTrigger className="px-4 py-3.5 w-full bg-[#8ACF8D] border border-[#6B6B6B] text-green-800 rounded-xl">
                  <div className="flex items-center gap-2">
                    <FaHouseChimney className="w-4 h-4 text-[#464646]" />
                    <span className="h-5 w-px bg-[#6B6B6B] mx-1" />
                    <SelectValue placeholder="Property Type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="cottage">Cottage</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={priceRangeFilter}
                onValueChange={setPriceRangeFilter}
              >
                <SelectTrigger className="px-4 py-3.5 w-full bg-[#8ACF8D] border border-[#6B6B6B] text-green-800 rounded-xl">
                  <div className="flex items-center gap-2">
                    <FaMoneyBills className="w-4 h-4 text-[#464646]" />
                    <span className="h-5 w-px bg-[#6B6B6B] mx-1" />
                    <SelectValue placeholder="Pricing Range" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5m">₦0 - ₦5M</SelectItem>
                  <SelectItem value="5m-15m">₦5M - ₦15M</SelectItem>
                  <SelectItem value="15m-50m">₦15M - ₦50M</SelectItem>
                  <SelectItem value="50m+">₦50M+</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={propertySizeFilter}
                onValueChange={setPropertySizeFilter}
              >
                <SelectTrigger className="px-4 py-3.5 w-full bg-[#8ACF8D] border border-[#6B6B6B] text-green-800 rounded-xl">
                  <div className="flex items-center gap-2">
                    <IoCubeSharp className="w-4 h-4 text-[#464646]" />
                    <span className="h-5 w-px bg-[#6B6B6B] mx-1" />
                    <SelectValue placeholder="Property Size" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2br">1-2 Bedrooms</SelectItem>
                  <SelectItem value="3-4br">3-4 Bedrooms</SelectItem>
                  <SelectItem value="5br+">5+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.property_id} property={property} />
          ))}
        </div>

        {filteredProperties.length > 6 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 border-green-600 text-green-600 hover:bg-green-50 rounded-xl"
            >
              Load More Properties
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
