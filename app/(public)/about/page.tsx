import { PageHeader } from "@/components/page-header";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="main">
      <div className="container">
        <PageHeader
          eyebrow="Your Study Companion"
          title="Welcome to StudyHub"
          description="Organize your notes, tasks, and learning resources all in one place"
        />
        
        <div className="grid">
          <div className="card">
            <h2>📝 Keep All Your Notes</h2>
            <p>Never lose important notes again. Create, organize, and find your notes instantly. Perfect for lectures, meetings, or quick thoughts.</p>
          </div>
          <div className="card">
            <h2>✅ Stay on Top of Tasks</h2>
            <p>Break down your big projects into manageable tasks. Track what you need to do and never miss a deadline.</p>
          </div>
          <div className="card">
            <h2>📚 Build Your Resource Library</h2>
            <p>Collect and organize learning materials, links, articles, and references. Build your personal knowledge base as you learn.</p>
          </div>
        </div>

        <div className="card" style={{ marginTop: "32px" }}>
          <h2>Why Choose StudyHub?</h2>
          <ul>
            <li><strong>Simple & Intuitive:</strong> No complicated features. Just straightforward tools to help you stay organized.</li>
            <li><strong>Always Available:</strong> Access your notes and tasks from any device, anytime.</li>
            <li><strong>Quick & Responsive:</strong> Fast loading times mean more time studying, less time waiting.</li>
            <li><strong>Built for Focus:</strong> A clean interface designed to minimize distractions and maximize productivity.</li>
          </ul>
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <h2>Ready to Get Organized?</h2>
          <p className="lead">Start managing your notes, tasks, and resources today.</p>
          <div className="row" style={{ justifyContent: "center" }}>
            <Link className="button primary" href="/dashboard">
              Go to Dashboard
            </Link>
            <Link className="button" href="/notes/new">
              Create First Note
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
