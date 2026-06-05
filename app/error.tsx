"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="main">
      <div className="container">
        <div className="card" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "60px 40px" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "12px" }}>⚠️</h1>
          <h2>Something Went Wrong</h2>
          <p className="lead" style={{ marginBottom: "32px" }}>
            We encountered an error while loading this page. Our team has been notified. Please try again.
          </p>
          <button className="button primary" onClick={reset}>🔄 Try Again</button>
        </div>
      </div>
    </main>
  );
}
