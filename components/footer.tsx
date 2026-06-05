export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "20px", marginBottom: "16px" }}>
          <div>
            <h4 style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.3px", marginBottom: "8px", color: "var(--ink)" }}>Product</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              <li><a href="/dashboard" style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "color 0.2s" }}>Dashboard</a></li>
              <li><a href="/notes" style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "color 0.2s" }}>Notes</a></li>
              <li><a href="/tasks" style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "color 0.2s" }}>Tasks</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.3px", marginBottom: "8px", color: "var(--ink)" }}>Info</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              <li><a href="/about" style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "color 0.2s" }}>About</a></li>
              <li><a href="/docs" style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "color 0.2s" }}>Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.3px", marginBottom: "8px", color: "var(--ink)" }}>About</h4>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.8rem", lineHeight: "1.4" }}>Your study companion.</p>
          </div>
        </div>
        <div style={{ paddingTop: "12px", borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.75rem" }}>© 2026 StudyHub: Fueling minds, shaping futures.</p>
        </div>
      </div>
    </footer>
  );
}
