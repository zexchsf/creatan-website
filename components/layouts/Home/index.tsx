import { AboutUsSection } from "./about-us-section";
import { CategoriesSection } from "./categories-section";
import { ContactUsSection } from "./contact-us-section";
import { FaqSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { Partners } from "./partners";
import { StatsSection } from "./stats-section";
import { TestimonialsSection } from "./testimonial-section";
import { ValuesSection } from "./values-sections";

function HomeLayout() {
  return (
    <div className="bg-[#E6EBEF]">
      <HeroSection />
      <Partners />
      <ValuesSection />
      <CategoriesSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutUsSection />
      <FaqSection />
      <ContactUsSection />
    </div>
  );
}

export default HomeLayout;
