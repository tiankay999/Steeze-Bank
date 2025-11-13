// app/(dashboard)/layout.tsx
import Sidebar from "../components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      {/* one place for padding & shift */}
      <main className="flex-1 ml-64 p-6">
        {children}
      </main>
    </div>
  );
}