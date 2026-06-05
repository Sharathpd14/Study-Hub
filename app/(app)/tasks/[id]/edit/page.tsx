import { notFound } from "next/navigation";
import { updateTaskAction } from "@/actions/task.actions";
import { PageHeader } from "@/components/page-header";
import { TaskForm } from "@/components/task-form";
import { getTask } from "@/services/task.service";

type EditTaskPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditTaskPage({ params }: EditTaskPageProps) {
  const { id } = await params;
  const taskId = Number(id);
  const task = await getTask(taskId);
  if (!task) notFound();

  return (
    <>
      <PageHeader 
        eyebrow="Update" 
        title="Edit Task" 
        description="Update your task details and status"
      />
      <TaskForm task={task} action={updateTaskAction.bind(null, taskId)} />
    </>
  );
}
