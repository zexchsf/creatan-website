"use client";

import { useEffect, useState } from "react";
import { Listing } from "./listing";
import { properties } from "@/lib/data";
import { ContactUsSection } from "./contact-us-section";

export function PropertyDetailPage({ id }: { id: string }) {
  const [property, setProperty] = useState<typeof properties[0] | null>(null);

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop.property_id === id);
    setProperty(selectedProperty || properties[0]);
  }, [id]);
  return (
    <div>
      {property && <Listing property={property} />}
      {property && <ContactUsSection property={property} />}
    </div>
  );
}
