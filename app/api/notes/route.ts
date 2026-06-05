import { Prisma } from "@prisma/client";
import { errorResponse, successResponse } from "@/lib/api-response";
import { noteSchema } from "@/lib/validators";
import { createNote, getNotes } from "@/services/note.service";

export async function GET() {
  const notes = await getNotes();
  return successResponse("Notes fetched successfully", notes);
}

export async function POST(request: Request) {
  try {
    const parsed = noteSchema.parse(await request.json());
    const note = await createNote(parsed);
    return successResponse("Note created successfully", note, 201);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return errorResponse("Database error", 500, error.message);
    }
    return errorResponse("Invalid request body", 400, error);
  }
}
