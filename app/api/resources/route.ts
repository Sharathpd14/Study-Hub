import { errorResponse, successResponse } from "@/lib/api-response";
import { resourceSchema } from "@/lib/validators";
import { createResource, getResources } from "@/services/resource.service";

export async function GET() {
  const resources = await getResources();
  return successResponse("Resources fetched successfully", resources);
}

export async function POST(request: Request) {
  try {
    const parsed = resourceSchema.parse(await request.json());
    const resource = await createResource(parsed);
    return successResponse("Resource created successfully", resource, 201);
  } catch (error) {
    return errorResponse("Invalid request body", 400, error);
  }
}
