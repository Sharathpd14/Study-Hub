import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { getNote } from "@/services/note.service";

type NotePageProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const note = await getNote(Number(id));
  if (!note) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Reading"
        title={note.title}
        description={`Last updated ${note.updatedAt.toLocaleDateString()}`}
        action={<Link className="button primary" href={`/notes/${note.id}/edit`}>✏️ Edit</Link>}
      />
      <article className="card" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
        <p style={{ whiteSpace: "pre-wrap", color: "var(--ink)" }}>{note.content}</p>
        <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--line)", color: "var(--muted)", fontSize: "0.9rem" }}>
          Created {note.createdAt.toLocaleDateString()} • Updated {note.updatedAt.toLocaleDateString()}
        </div>
      </article>
    </>
  );
}
