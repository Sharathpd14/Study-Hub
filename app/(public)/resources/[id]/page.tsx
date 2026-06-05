import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { getResource } from "@/services/resource.service";

type ResourcePageProps = {
  params: Promise<{ id: string }>;
};

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { id } = await params;
  const resource = await getResource(Number(id));
  if (!resource) notFound();

  return (
    <main className="main">
      <div className="container">
        <PageHeader 
          eyebrow={resource.category} 
          title={resource.title} 
          description={resource.description}
          action={<a className="button primary" href={resource.link} target="_blank" rel="noopener noreferrer">🔗 Open Resource</a>}
        />
        <article className="card" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
          <p>{resource.description}</p>
          <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
            <p style={{ margin: "8px 0", color: "var(--muted)", fontSize: "0.9rem" }}>
              <strong>Category:</strong> <span style={{ textTransform: "capitalize" }}>{resource.category}</span>
            </p>
            <a className="button primary" href={resource.link} target="_blank" rel="noopener noreferrer">
              📌 Visit Resource
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
