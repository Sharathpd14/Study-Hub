import { PageHeader } from "@/components/page-header";

type ResourcePathPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ResourcePathPage({ params }: ResourcePathPageProps) {
  const { slug } = await params;
  const title = slug.map((part) => part.replaceAll("-", " ")).join(" / ");

  return (
    <main className="main">
      <div className="container">
        <PageHeader
          eyebrow="Catch-all route"
          title={title}
          description="This page receives every nested resource path segment as an array."
        />
      </div>
    </main>
  );
}
