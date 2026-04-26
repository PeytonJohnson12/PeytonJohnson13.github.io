import type { Metadata } from "next";
import AdminSidebar from "@/app/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin — Acme Corp",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#03050E]">
      <aside className="w-60 shrink-0 border-r border-white/[0.06] bg-[#0D1117] flex flex-col">
        <div className="h-16 flex items-center px-5 border-b border-white/[0.06]">
          <span className="font-extrabold text-lg text-[#F0F6FC] tracking-[-0.03em]">
            Acme<span className="text-[#3B82F6]">Corp</span>
          </span>
        </div>
        <AdminSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto bg-[#03050E]">
        {children}
      </main>
    </div>
  );
}
