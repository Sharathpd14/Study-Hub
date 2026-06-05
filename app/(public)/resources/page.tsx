import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { getResources } from "@/services/resource.service";

export const revalidate = 120;

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <main className="main">
      <div className="container">
        <PageHeader
          eyebrow="Learning Library"
          title="Curated Resources"
          description="Discover quality learning materials organized by category"
        />
        {resources.length === 0 ? (
          <EmptyState message="No resources available yet. Check back soon for curated learning materials!" />
        ) : (
          <div className="grid">
            {resources.map((resource) => (
              <article className="card" key={resource.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                  <h3>{resource.title}</h3>
                  <span className="badge primary">{resource.category}</span>
                </div>
                <p>{resource.description}</p>
                <div className="row" style={{ marginTop: "16px" }}>
                  <Link className="button" href={`/resources/${resource.id}`}>View Details</Link>
                  <a className="button primary" href={resource.link} target="_blank" rel="noopener noreferrer">
                    🔗 Open Resource
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
