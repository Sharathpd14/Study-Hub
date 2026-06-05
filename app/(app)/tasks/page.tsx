import Link from "next/link";
import { deleteTaskAction, toggleTaskAction } from "@/actions/task.actions";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { getTasks } from "@/services/task.service";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const tasks = await getTasks();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "var(--error)";
      case "medium":
        return "var(--warning)";
      case "low":
        return "var(--success)";
      default:
        return "var(--muted)";
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Productivity"
        title="Your Tasks"
        description="Track and manage your study tasks and deadlines"
        action={<Link className="button primary" href="/tasks/new">+ New Task</Link>}
      />
      {tasks.length === 0 ? (
        <EmptyState message="No tasks yet. Create your first task to stay organized!" />
      ) : (
        <div className="grid">
          {tasks.map((task) => (
            <article className="card" key={task.id} style={{ opacity: task.status === "completed" ? 0.7 : 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
                <h3 style={{ textDecoration: task.status === "completed" ? "line-through" : "none" }}>{task.title}</h3>
                <span className="badge" style={{ backgroundColor: getPriorityColor(task.priority), color: "white" }}>
                  {task.priority.toUpperCase()}
                </span>
              </div>
              <p style={{ margin: "8px 0" }}>
                <strong>Status:</strong> <span style={{ textTransform: "capitalize", color: task.status === "completed" ? "var(--success)" : "var(--warning)" }}>{task.status}</span>
              </p>
              {task.dueDate && (
                <p style={{ margin: "8px 0", color: "var(--muted)", fontSize: "0.9rem" }}>
                  📅 Due {task.dueDate.toLocaleDateString()}
                </p>
              )}
              <div className="row" style={{ marginTop: "16px" }}>
                <form action={toggleTaskAction.bind(null, task.id)} style={{ margin: 0 }}>
                  <button className="button" type="submit">
                    {task.status === "completed" ? "↩️ Undo" : "✅ Complete"}
                  </button>
                </form>
                <Link className="button" href={`/tasks/${task.id}/edit`}>Edit</Link>
                <form action={deleteTaskAction.bind(null, task.id)} style={{ margin: 0 }}>
                  <button className="button" type="submit" style={{ color: "var(--error)" }}>Delete</button>
                </form>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
