import Link from "next/link";
import { deleteNoteAction } from "@/actions/note.actions";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { getNotes } from "@/services/note.service";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <>
      <PageHeader
        eyebrow="Study Materials"
        title="Your Notes"
        description="Create, organize, and manage your study notes"
        action={<Link className="button primary" href="/notes/new">+ New Note</Link>}
      />
      {notes.length === 0 ? (
        <EmptyState message="No notes yet. Start by creating your first study note!" />
      ) : (
        <div className="grid">
          {notes.map((note) => (
            <article className="card" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content.slice(0, 120)}...</p>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "12px" }}>
                Updated {note.updatedAt.toLocaleDateString()}
              </p>
              <div className="row" style={{ marginTop: "16px" }}>
                <Link className="button" href={`/notes/${note.id}`}>View</Link>
                <Link className="button" href={`/notes/${note.id}/edit`}>Edit</Link>
                <form action={deleteNoteAction.bind(null, note.id)} style={{ margin: 0 }}>
                  <button className="button" type="submit" style={{ color: "var(--error)" }}>Delete</button>
                </form>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
