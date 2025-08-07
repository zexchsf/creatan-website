"use client";

import SpiralVortex from "@/assets/spiral-vortex.png";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const inquiryFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  emailAddress: z.email({ message: "Please enter a valid email address" }),
  preferredLocation: z.string().optional(),
  propertyType: z.string().optional(),
  bathrooms: z.string().optional(),
  bedrooms: z.string().optional(),
  budget: z.string().optional(),
  additionalInfo: z.string().min(10, "Additional information must be at least 10 characters"),
});

type InquiryFormData = z.infer<typeof inquiryFormSchema>;

interface RealEstateInquiryFormProps {
  className?: string;
}

export default function RealEstateInquiryForm({ className }: RealEstateInquiryFormProps) {
  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      preferredLocation: "",
      propertyType: "",
      bathrooms: "",
      bedrooms: "",
      budget: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    try {
      console.log("Form submitted:", data);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className={`bg-[#E6F5E6] py-16 px-4 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <Image src={SpiralVortex} alt="" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 lg:pr-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#323232] leading-tight">
              Let's Make it Happen
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Ready to find your dream property? Fill out the form and let our real estate experts do the rest. Let's get started!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#404040] text-sm font-medium">
                          Full Name
                          <span className="text-red-500 ml-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] placeholder:text-[#B3B3B3] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all"
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
                        <FormLabel className="text-[#404040] text-sm font-medium">
                          Phone Number
                          <span className="text-red-500 ml-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] placeholder:text-[#B3B3B3] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all"
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
                      <FormLabel className="text-[#404040] text-sm font-medium">
                        Email Address
                        <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] placeholder:text-[#B3B3B3] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preferredLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#404040] text-sm font-medium">
                          Preferred Location
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all">
                              <SelectValue placeholder="Select Location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="lagos">Lagos</SelectItem>
                            <SelectItem value="abuja">Abuja</SelectItem>
                            <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                            <SelectItem value="kano">Kano</SelectItem>
                            <SelectItem value="ibadan">Ibadan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#404040] text-sm font-medium">
                          Property Type
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all">
                              <SelectValue placeholder="Select Property Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#404040] text-sm font-medium">
                          No. of Bathrooms
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all">
                              <SelectValue placeholder="Select Bathrooms" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#404040] text-sm font-medium">
                          No. of Bedrooms
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all">
                              <SelectValue placeholder="Select Bedrooms" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#404040] text-sm font-medium">
                        Budget
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full bg-[#F7F7F7] border-none rounded-lg h-12 px-4 text-[#333] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all">
                            <SelectValue placeholder="Select Budget" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-50m">Under ₦50M</SelectItem>
                          <SelectItem value="50m-100m">₦50M - ₦100M</SelectItem>
                          <SelectItem value="100m-200m">₦100M - ₦200M</SelectItem>
                          <SelectItem value="200m-500m">₦200M - ₦500M</SelectItem>
                          <SelectItem value="500m+">₦500M+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#404040] text-sm font-medium">
                        Additional Information
                        <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          rows={4}
                          className="bg-[#F7F7F7] border-none rounded-lg px-4 py-3 text-[#333] placeholder:text-[#B3B3B3] focus:ring-2 focus:ring-green-200 focus:bg-white transition-all resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                    type="submit"
                    className="rounded-full px-10 py-6 bg-[#002641] hover:bg-[#002641]/90 text-white font-semibold text-lg"
                    disabled={form.formState.isSubmitting}
                  >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
} 