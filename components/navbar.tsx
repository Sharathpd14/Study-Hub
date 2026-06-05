import Link from "next/link";

export function Navbar() {
  return (
    <header className="top-nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">StudyHub</Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/tasks">Tasks</Link>
        </nav>
      </div>
    </header>
  );
}
