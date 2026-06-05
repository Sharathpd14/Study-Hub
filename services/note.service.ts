import { prisma } from "@/lib/db";

export type NoteInput = {
  title: string;
  content: string;
};

export function getNotes() {
  return prisma.note.findMany({ orderBy: { updatedAt: "desc" } });
}

export function getNote(id: number) {
  return prisma.note.findUnique({ where: { id } });
}

export function createNote(data: NoteInput) {
  return prisma.note.create({ data });
}

export function updateNote(id: number, data: Partial<NoteInput>) {
  return prisma.note.update({ where: { id }, data });
}

export function deleteNote(id: number) {
  return prisma.note.delete({ where: { id } });
}
