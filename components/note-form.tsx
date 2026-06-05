import type { Note } from "@prisma/client";

type NoteFormProps = {
  note?: Note;
  action: (formData: FormData) => Promise<void>;
};

export function NoteForm({ note, action }: NoteFormProps) {
  return (
    <form className="form" action={action}>
      <div className="field">
        <label htmlFor="title">Note Title</label>
        <input 
          id="title" 
          name="title" 
          placeholder="Enter a descriptive title for your note"
          defaultValue={note?.title} 
          required 
        />
      </div>
      <div className="field">
        <label htmlFor="content">Content</label>
        <textarea 
          id="content" 
          name="content" 
          placeholder="Write your notes here. Add as much detail as you need..."
          defaultValue={note?.content} 
          required 
        />
      </div>
      <div className="row" style={{ justifyContent: "flex-start", marginTop: "8px" }}>
        <button className="button primary" type="submit">
          {note ? "💾 Update Note" : "✨ Create Note"}
        </button>
      </div>
    </form>
  );
}
