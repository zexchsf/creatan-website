"use client";

import { ContactForm } from "./contact-form";
import { ContactInformation } from "./contact-information";
import { Hero } from "./hero";

export function AboutUsPage() {
  return (
    <div>
      <Hero />
      <ContactInformation />
      <ContactForm />
    </div>
  );
}
