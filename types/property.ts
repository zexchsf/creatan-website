import { StaticImageData } from "next/image";

export interface Property {
  property_id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: string[];
  price: number;
  images: (string | StaticImageData)[];
}
