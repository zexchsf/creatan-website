import { PropertyDetailPage } from "@/components/layouts/property-detail";

type PageProps = {
  params: {
    id: string;
  };
};

export default function PropertyPage({ params }: PageProps) {
  return <PropertyDetailPage id={params.id} />;
}
