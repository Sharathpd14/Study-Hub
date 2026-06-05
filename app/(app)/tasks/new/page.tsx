import { createTaskAction } from "@/actions/task.actions";
import { PageHeader } from "@/components/page-header";
import { TaskForm } from "@/components/task-form";

export default function NewTaskPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Create" 
        title="New Task" 
        description="Add a new task to your study plan"
      />
      <TaskForm action={createTaskAction} />
    </>
  );
}
