import { Sidebar } from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main">
      <div className="app-grid">
        <Sidebar />
        <section>{children}</section>
      </div>
    </main>
  );
}
