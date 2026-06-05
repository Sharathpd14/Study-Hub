"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { noteSchema } from "@/lib/validators";
import { createNote, deleteNote, updateNote } from "@/services/note.service";

export async function createNoteAction(formData: FormData) {
  const parsed = noteSchema.parse(Object.fromEntries(formData));
  await createNote(parsed);
  revalidatePath("/notes");
  revalidatePath("/dashboard");
  redirect("/notes");
}

export async function updateNoteAction(id: number, formData: FormData) {
  const parsed = noteSchema.parse(Object.fromEntries(formData));
  await updateNote(id, parsed);
  revalidatePath("/notes");
  revalidatePath(`/notes/${id}`);
  redirect(`/notes/${id}`);
}

export async function deleteNoteAction(id: number) {
  await deleteNote(id);
  revalidatePath("/notes");
  revalidatePath("/dashboard");
}
