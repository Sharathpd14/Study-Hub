import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getNotes } from "@/services/note.service";
import { getTasks } from "@/services/task.service";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [notes, tasks] = await Promise.all([getNotes(), getTasks()]);
  const completed = tasks.filter((task) => task.status === "completed").length;
  const pending = tasks.filter((task) => task.status === "pending").length;

  return (
    <>
      <PageHeader
        eyebrow="Welcome back"
        title="Dashboard"
        description="Quick overview of your study progress and recent activity"
      />
      <div className="grid">
        <div className="card stat">
          <h2>{notes.length}</h2>
          <p>Study Notes</p>
        </div>
        <div className="card stat">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>
        <div className="card stat">
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>
        <div className="card stat">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h2 style={{ marginBottom: "20px" }}>Quick Actions</h2>
        <div className="row">
          <Link className="button primary" href="/notes/new">➕ New Note</Link>
          <Link className="button primary" href="/tasks/new">➕ New Task</Link>
          <Link className="button" href="/notes">📝 View Notes</Link>
          <Link className="button" href="/tasks">✅ View Tasks</Link>
        </div>
      </div>
    </>
  );
}
