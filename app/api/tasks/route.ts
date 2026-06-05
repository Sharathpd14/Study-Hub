import { errorResponse, successResponse } from "@/lib/api-response";
import { taskSchema } from "@/lib/validators";
import { createTask, getTasks } from "@/services/task.service";

export async function GET() {
  const tasks = await getTasks();
  return successResponse("Tasks fetched successfully", tasks);
}

export async function POST(request: Request) {
  try {
    const parsed = taskSchema.parse(await request.json());
    const task = await createTask(parsed);
    return successResponse("Task created successfully", task, 201);
  } catch (error) {
    return errorResponse("Invalid request body", 400, error);
  }
}
