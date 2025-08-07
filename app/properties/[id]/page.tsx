import { PropertyDetailPage } from "@/components/layouts/property-detail";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  return <PropertyDetailPage id={id} />;
}
