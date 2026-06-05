import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main">
      <div className="container">
        <div className="card" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "60px 40px" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "12px" }}>404</h1>
          <h2>Page Not Found</h2>
          <p className="lead" style={{ marginBottom: "32px" }}>
            The page you're looking for doesn't exist. Let's get you back on track!
          </p>
          <Link className="button primary" href="/">🏠 Go Home</Link>
        </div>
      </div>
    </main>
  );
}
