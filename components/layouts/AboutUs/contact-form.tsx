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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import SpiralVector from "@/assets/spiral-vector.png";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  emailAddress: z.email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an interest"),
  additionalInfo: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
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
    <section className="bg-[#E6F5E6] py-16 px-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={SpiralVector}
          alt=""
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="max-w-6xl relative ">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#323232] mb-4">
            Let's Connect
          </h2>
          <p className="text-[#6B6B6B] text-lg">
            We'd love to hear from you! Fill out the form to connect with
            Creatan Garden — whether you're a client, partner, or just curious
            about our services, we're here to answer your questions and provide
            the assistance you need.
          </p>
        </div>

        <div className="bg-white rounded-2xl px-28 py-28 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
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
                      <FormLabel>
                        Phone Number
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email Address
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
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
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What are you interested in?
                        <span className="text-[#FF4D4F] ml-0.5">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-[#F6F6F6] border-none outline-none focus:ring-0 focus:border-none">
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
              </div>

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
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

              <div className="text-right">
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
    </section>
  );
}
