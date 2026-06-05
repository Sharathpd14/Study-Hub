import { PageHeader } from "@/components/page-header";

type DocsPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const path = slug?.join(" › ") ?? "Overview";

  return (
    <main className="main">
      <div className="container">
        <PageHeader
          eyebrow="Documentation"
          title={`Docs: ${path}`}
          description="Learn how to get the most out of StudyHub"
        />
        <article className="card" style={{ maxWidth: "900px", lineHeight: "1.8" }}>
          <p style={{ color: "var(--muted)" }}>
            📚 Documentation content coming soon. Check back for guides, tutorials, and FAQs.
          </p>
        </article>
      </div>
    </main>
  );
}
