import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-links" aria-label="Study workspace">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/notes/new">New note</Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/tasks/new">New task</Link>
      </nav>
    </aside>
  );
}
