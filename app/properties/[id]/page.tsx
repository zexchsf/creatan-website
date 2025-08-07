import { PropertyDetailPage } from "@/components/layouts/property-detail";

export default function PropertyPage({ params }: { params: { id: string } }) {
  return <PropertyDetailPage id={params.id} />;
}
