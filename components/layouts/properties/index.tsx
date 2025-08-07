import { Hero } from "./hero";
import { Listings } from "./listings";
import RealEstateInquiryForm from "./inquiry-form";

export function PropertiesPage() {
  return (
    <div>
      <Hero />
      <Listings />
      <RealEstateInquiryForm />
    </div>
  );
}
