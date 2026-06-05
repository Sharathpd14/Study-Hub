import { prisma } from "@/lib/db";

export type TaskInput = {
  title: string;
  status?: string;
  priority?: string;
  dueDate?: Date;
};

export function getTasks() {
  return prisma.task.findMany({ orderBy: [{ status: "asc" }, { updatedAt: "desc" }] });
}

export function getTask(id: number) {
  return prisma.task.findUnique({ where: { id } });
}

export function createTask(data: TaskInput) {
  return prisma.task.create({ data });
}

export function updateTask(id: number, data: Partial<TaskInput>) {
  return prisma.task.update({ where: { id }, data });
}

export function deleteTask(id: number) {
  return prisma.task.delete({ where: { id } });
}

export async function toggleTaskStatus(id: number) {
  const task = await getTask(id);
  if (!task) return null;
  return updateTask(id, { status: task.status === "completed" ? "pending" : "completed" });
}
