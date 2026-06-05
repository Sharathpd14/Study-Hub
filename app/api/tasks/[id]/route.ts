import { Prisma } from "@prisma/client";
import { errorResponse, successResponse } from "@/lib/api-response";
import { taskSchema } from "@/lib/validators";
import { deleteTask, getTask, updateTask } from "@/services/task.service";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const task = await getTask(Number(id));
  if (!task) return errorResponse("Task not found", 404);
  return successResponse("Task fetched successfully", task);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const parsed = taskSchema.partial().parse(await request.json());
    const task = await updateTask(Number(id), parsed);
    return successResponse("Task updated successfully", task);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return errorResponse("Task not found", 404);
    }
    return errorResponse("Invalid request body", 400, error);
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    await deleteTask(Number(id));
    return successResponse("Task deleted successfully", { id: Number(id) });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return errorResponse("Task not found", 404);
    }
    return errorResponse("Unable to delete task", 500, error);
  }
}
