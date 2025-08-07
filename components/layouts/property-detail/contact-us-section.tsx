"use client";

import SpiralVector from "@/assets/spiral-vector.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Property } from "@/types/property";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  emailAddress: z.email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an interest"),
  additionalInfo: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactUsSectionProps {
  property: Property;
}

export function ContactUsSection({ property }: ContactUsSectionProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form submitted:", data);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-[#E6EBEF] py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src={SpiralVector} alt="" fill className="object-cover" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-28 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#323232]">
                Inquire About {property?.title} {property?.location} Property
              </h2>
              <p className="text-[#6B6B6B] text-lg">
                Interested in this property? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="gap-0">
                          Full Name
                          <span className="text-[#FF4D4F] ml-0.5">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="gap-0">
                          Phone Number
                          <span className="text-[#FF4D4F] ml-0.5">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            className="bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none"
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-0">
                        Email Address
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-0">Selected Property</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none"
                          placeholder={property?.location}
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-0">
                        Additional Information
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          rows={4}
                          className="resize-none min-h-[150px] max-h-[200px] bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button
                    type="submit"
                    className="rounded-full px-10 py-6 bg-[#002641] hover:bg-[#002641]/90 text-white font-semibold text-lg"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Submitting..."
                      : "Request a Callback"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
