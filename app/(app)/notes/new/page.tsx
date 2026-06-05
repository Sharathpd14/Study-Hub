import { createNoteAction } from "@/actions/note.actions";
import { NoteForm } from "@/components/note-form";
import { PageHeader } from "@/components/page-header";

export default function NewNotePage() {
  return (
    <>
      <PageHeader 
        eyebrow="Create" 
        title="New Study Note" 
        description="Start capturing your thoughts and insights"
      />
      <NoteForm action={createNoteAction} />
    </>
  );
}
