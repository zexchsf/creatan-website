"use client";

import { ContactForm } from "./contact-form";
import { ContactInformation } from "./contact-information";
import { Hero } from "./hero";

export function ContactUsPage() {
  return (
    <div>
      <Hero />
      <ContactInformation />
      <ContactForm />
    </div>
  );
}
