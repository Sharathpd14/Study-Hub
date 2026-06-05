import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().trim().min(2, "Title must be at least 2 characters"),
  content: z.string().trim().min(5, "Content must be at least 5 characters")
});

export const taskSchema = z.object({
  title: z.string().trim().min(2, "Title must be at least 2 characters"),
  status: z.enum(["pending", "completed"]).default("pending"),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  dueDate: z.string().optional().transform((value) => (value ? new Date(value) : undefined))
});
