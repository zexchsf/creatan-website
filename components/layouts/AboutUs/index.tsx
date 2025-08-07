import { ValuesSection } from "../Home/values-sections";
import RealEstateInquiryForm from "../properties/inquiry-form";
import Introduction from "./introduction";

export default function AboutUsPage() {
  return (
    <div>
    <Introduction />
    <ValuesSection />
    <RealEstateInquiryForm  className="bg-[#E6EBEF]"/>
    </div>
  );
}