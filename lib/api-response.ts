import { NextResponse } from "next/server";

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: unknown;
};

export function successResponse<T>(message: string, data: T, status = 200) {
  return NextResponse.json<ApiResponse<T>>({ success: true, message, data }, { status });
}

export function errorResponse(message: string, status = 500, error: unknown = null) {
  return NextResponse.json<ApiResponse<never>>({ success: false, message, error }, { status });
}
