import { Accordion } from "@/components/molecules/accordion";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#323232] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#999999] max-w-3xl mx-auto">
            Get answers to common questions about Creatan Garden&apos;s services,
            listings, and process.
          </p>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}
