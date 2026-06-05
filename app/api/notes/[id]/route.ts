import { Prisma } from "@prisma/client";
import { errorResponse, successResponse } from "@/lib/api-response";
import { noteSchema } from "@/lib/validators";
import { deleteNote, getNote, updateNote } from "@/services/note.service";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const note = await getNote(Number(id));
  if (!note) return errorResponse("Note not found", 404);
  return successResponse("Note fetched successfully", note);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const parsed = noteSchema.partial().parse(await request.json());
    const note = await updateNote(Number(id), parsed);
    return successResponse("Note updated successfully", note);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return errorResponse("Note not found", 404);
    }
    return errorResponse("Invalid request body", 400, error);
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    await deleteNote(Number(id));
    return successResponse("Note deleted successfully", { id: Number(id) });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return errorResponse("Note not found", 404);
    }
    return errorResponse("Unable to delete note", 500, error);
  }
}
