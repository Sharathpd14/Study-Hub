export function EmptyState({ message }: { message: string }) {
  return (
    <div className="card empty">
      <p style={{ fontSize: "1.1rem", color: "var(--muted)" }}>{message}</p>
    </div>
  );
}
