import { Prisma } from "@prisma/client";
import { errorResponse, successResponse } from "@/lib/api-response";
import { resourceSchema } from "@/lib/validators";
import { deleteResource, getResource, updateResource } from "@/services/resource.service";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const resource = await getResource(Number(id));
  if (!resource) return errorResponse("Resource not found", 404);
  return successResponse("Resource fetched successfully", resource);
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const parsed = resourceSchema.partial().parse(await request.json());
    const resource = await updateResource(Number(id), parsed);
    return successResponse("Resource updated successfully", resource);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return errorResponse("Resource not found", 404);
    }
    return errorResponse("Invalid request body", 400, error);
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    await deleteResource(Number(id));
    return successResponse("Resource deleted successfully", { id: Number(id) });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return errorResponse("Resource not found", 404);
    }
    return errorResponse("Unable to delete resource", 500, error);
  }
}
