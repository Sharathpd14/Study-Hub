import { notFound } from "next/navigation";
import { updateNoteAction } from "@/actions/note.actions";
import { NoteForm } from "@/components/note-form";
import { PageHeader } from "@/components/page-header";
import { getNote } from "@/services/note.service";

type EditNotePageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditNotePage({ params }: EditNotePageProps) {
  const { id } = await params;
  const noteId = Number(id);
  const note = await getNote(noteId);
  if (!note) notFound();

  return (
    <>
      <PageHeader 
        eyebrow="Update" 
        title="Edit Note" 
        description="Make changes to your study note"
      />
      <NoteForm note={note} action={updateNoteAction.bind(null, noteId)} />
    </>
  );
}
