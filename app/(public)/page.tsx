import Link from "next/link";

export default function HomePage() {
  return (
    <main className="main">
      <section className="container hero">
        <div>
          <p className="eyebrow">Student Productivity Platform</p>
          <h1>StudyHub</h1>
          <p className="lead">
            Organize your academic life. Manage notes, track tasks, curate resources, and achieve your study goals all in one beautifully designed app.
          </p>
          <div className="row">
            <Link className="button primary" href="/dashboard">Open Dashboard</Link>
            <Link className="button" href="/about">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "48px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>What You Can Do</h2>
        <div className="grid">
          <div className="card">
            <h3>📝 Create & Organize Notes</h3>
            <p>Capture lecture notes, quick ideas, and important concepts. Keep everything organized and easily searchable for exam prep.</p>
          </div>
          <div className="card">
            <h3>✅ Track Your Tasks</h3>
            <p>Set priorities, track deadlines, and mark tasks complete. Stay focused on what matters most to your academic success.</p>
          </div>
          <div className="card">
            <h3>📚 Build Resource Library</h3>
            <p>Collect articles, videos, tutorials, and links. Build your personal knowledge base and access them whenever you need.</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "48px", marginBottom: "48px" }}>
        <div style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: "10px", padding: "40px 32px", textAlign: "center" }}>
          <h2>Ready to Get Started?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", marginBottom: "24px" }}>
            Join thousands of students already using StudyHub to stay organized and succeed.
          </p>
          <Link className="button primary" href="/dashboard">Start Your Journey</Link>
        </div>
      </section>
    </main>
  );
}
