import Property1 from "@/assets/images/property-1.png";
import Property2 from "@/assets/images/property-2.png";
import SeaSideSerenity from "@/assets/images/seaside-serenity-villa.jpg";
import Metropolitan from "@/assets/images/metropolitan.jpg";
import Cottage from "@/assets/images/cottage.jpg";
import { Property } from "@/types/property";

export const testimonials = [
  {
    name: "Korede & Sons Co.",
    rating: 5.0,
    size: "200m²",
    bedrooms: 3,
    bathrooms: 2,
    testimonial:
      "Partnering with Creatan Garden to secure our commercial site was one of the best decisions we made. They understood our business needs and found us a prime location that's already driving more customers our way.",
  },
  {
    name: "Dr. Funsho Rogers",
    rating: 5.0,
    size: "200m²",
    bedrooms: 3,
    bathrooms: 2,
    testimonial:
      "Our family needed more space and a safe community to grow in. Creatan Garden helped us find a lovely home that checked every box. From the quality finishes to the thoughtful layout, it’s everything we hoped for.",
  },
  {
    name: "Mr. Bakare Felix",
    rating: 5.0,
    size: "200m²",
    bedrooms: 3,
    bathrooms: 2,
    testimonial:
      "This is my second property through Creatan Garden and they’ve impressed me both times. Their professionalism, market insight, and genuine care set them apart from anywhere else.",
  },
  {
    name: "Mrs. Ngozi Umeh",
    rating: 4.8,
    size: "150m²",
    bedrooms: 2,
    bathrooms: 1,
    testimonial:
      "As a single mum, I wanted a secure and quiet place for my kids. Creatan Garden made it so easy and stress-free. I love my new place in Gwarinpa!",
  },
  {
    name: "Mr. Tunde Ajayi",
    rating: 5.0,
    size: "300m²",
    bedrooms: 4,
    bathrooms: 3,
    testimonial:
      "The estate is top-notch. I finally have the kind of space and peace I’ve always wanted in Abuja. Their agents were very supportive throughout the process.",
  },
  {
    name: "Sani & Hauwa Enterprises",
    rating: 4.9,
    size: "250m²",
    bedrooms: 3,
    bathrooms: 2,
    testimonial:
      "Our new store in the complex has brought in more walk-in customers. We’re really impressed with how well Creatan Garden understands commercial needs.",
  },
];

export const faqs = [
  {
    question: "What methods of payments are supported?",
    answer:
      "We accept all major credit cards, bank transfers, and certified checks. For property purchases, we also work with mortgage lenders and can assist with financing options. Payment methods may vary depending on the specific property and transaction type.",
  },
  {
    question: "Can I cancel an anytime?",
    answer:
      "Yes, you can cancel most of our services with appropriate notice. For property viewings and consultations, we require 24-48 hours notice. For listing agreements, cancellation terms are outlined in your contract. Please contact us to discuss your specific situation.",
  },
  {
    question: "How do I get a receipt for my purchase?",
    answer:
      "All receipts and transaction documents are provided digitally through our secure client portal. You'll receive an email confirmation immediately after any payment, and detailed receipts are available for download in your account dashboard within 24 hours.",
  },
  {
    question: "Which license do I need?",
    answer:
      "As our client, you don't need any special licenses to buy or sell property with us. We handle all the licensing requirements as licensed real estate professionals. However, if you're looking to become a real estate agent yourself, we can provide guidance on obtaining your real estate license.",
  },
  {
    question: "How do I get access to a theme I purchased?",
    answer:
      "Once you've signed a purchase agreement or lease, you'll receive access credentials to our client portal where you can view all property documents, track transaction progress, and communicate with your dedicated agent. Access is typically granted within 1-2 business hours of contract signing.",
  },
];

export const properties: Property[] = [
  {
    property_id: "property-1",
    title: "Luxury Apartment",
    location: "Eti-osa, Nigeria",
    price: 40_000_000,
    images: [Property1, Property2],
    description:
      "Discover your own piece of paradise with the Luxury Apartment. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: [
      "Expansive oceanfront terrace for outdoor entertaining",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private beach access for morning strolls and sunset views",
      "Master suite with a spa-inspired bathroom and ocean-facing balcony",
      "Private garage and ample storage space",
    ],
  },
  {
    property_id: "property-2",
    title: "Seaside Serenity Villa",
    location: "Eti-osa, Nigeria",
    price: 11_250_000,
    images: [SeaSideSerenity],
    description:
      "Experience tranquil coastal living in this stunning seaside villa. Featuring panoramic ocean views, spacious terraces, and elegant interiors, this property offers the perfect blend of luxury and serenity. Wake up to the sound of waves and enjoy breathtaking sunsets from your private balcony.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: [
      "Expansive oceanfront terrace for outdoor entertaining",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private beach access for morning strolls and sunset views",
      "Master suite with a spa-inspired bathroom and ocean-facing balcony",
      "Private garage and ample storage space",
    ],
  },
  {
    property_id: "property-3",
    title: "Metropolitan Haven",
    location: "Eti-osa, Nigeria",
    price: 6_500_000,
    images: [Metropolitan],
    description:
      "Embrace urban sophistication in this modern metropolitan apartment. Located in the heart of the city, this contemporary living space combines sleek design with premium amenities. Perfect for professionals seeking convenience, style, and connectivity to all major business districts.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: [
      "Floor-to-ceiling windows with stunning city skyline views",
      "Modern open-plan kitchen with premium stainless steel appliances",
      "Rooftop terrace with panoramic metropolitan views",
      "High-speed fiber internet and smart home automation",
      "Secure underground parking and 24/7 concierge service",
    ],
  },
  {
    property_id: "property-4",
    title: "Rustic Retreat Cottage",
    location: "Eti-osa, Nigeria",
    price: 3_500_000,
    images: [Cottage],
    description:
      "Escape to this charming rustic cottage nestled in a peaceful setting. This cozy retreat features traditional architecture, natural materials, and a warm, inviting atmosphere. Ideal for those seeking a quiet sanctuary away from the hustle and bustle of city life.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: [
      "Cozy fireplace with exposed brick chimney for winter warmth",
      "Traditional country kitchen with farmhouse-style fixtures",
      "Private garden with mature trees and peaceful walking paths",
      "Handcrafted wooden beams and authentic stone accents",
      "Detached workshop space and organic vegetable garden area",
    ],
  },
];
