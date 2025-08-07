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
import { FaLocationDot, FaPaperPlane, FaPhone } from "react-icons/fa6";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  emailAddress: z.email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an interest"),
  additionalInfo: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    title: "Send a mail",
    icon: <FaPaperPlane className="w-5 h-5 text-[#006B05]" />,
    content: "creatangardenestateltd@gmail.com",
  },
  {
    title: "Give us a call",
    icon: <FaPhone className="w-5 h-5 text-[#006B05]" />,
    content: "+234 913 634 7616, +234 906 466 5805",
  },
  {
    title: "Visit us",
    icon: <FaLocationDot className="w-5 h-5 text-[#006B05]" />,
    content: "123 Main Street, Anytown, USA",
  },
];

export function ContactUsSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      interest: "",
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
    <div className="bg-[#E6F5E6] py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src={SpiralVector} alt="" fill className="object-cover" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#323232]">
                Ready to Find Your Property?
              </h2>
              <p className="text-[#6B6B6B] text-lg">
                Tell us what you&apos;re looking for, and our team will reach out
                with tailored options and expert guidance.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-[#323232]">
                      {info.title}
                    </h3>
                    <p className="text-[#6B6B6B] font-medium">{info.content}</p>
                  </div>
                </div>
              ))}
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
                      <FormLabel className="gap-0">
                        What are you interested in?
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="buying">
                            Buying Property
                          </SelectItem>
                          <SelectItem value="selling">
                            Selling Property
                          </SelectItem>
                          <SelectItem value="renting">
                            Renting Property
                          </SelectItem>
                          <SelectItem value="investment">
                            Investment Opportunities
                          </SelectItem>
                          <SelectItem value="consultation">
                            Property Consultation
                          </SelectItem>
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
                      <FormLabel className="gap-0">
                        Additional Information
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          rows={4}
                          className="resize-none min-h-[150px] max-h-[200px]"
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
                    className="rounded-full px-10 py-6 bg-[#006B05] hover:bg-[#005304] text-white font-semibold text-lg"
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
