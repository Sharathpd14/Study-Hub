"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { taskSchema } from "@/lib/validators";
import { createTask, deleteTask, toggleTaskStatus, updateTask } from "@/services/task.service";

export async function createTaskAction(formData: FormData) {
  const parsed = taskSchema.parse(Object.fromEntries(formData));
  await createTask(parsed);
  revalidatePath("/tasks");
  revalidatePath("/dashboard");
  redirect("/tasks");
}

export async function updateTaskAction(id: number, formData: FormData) {
  const parsed = taskSchema.parse(Object.fromEntries(formData));
  await updateTask(id, parsed);
  revalidatePath("/tasks");
  revalidatePath("/dashboard");
  redirect("/tasks");
}

export async function toggleTaskAction(id: number) {
  await toggleTaskStatus(id);
  revalidatePath("/tasks");
  revalidatePath("/dashboard");
}

export async function deleteTaskAction(id: number) {
  await deleteTask(id);
  revalidatePath("/tasks");
  revalidatePath("/dashboard");
}
