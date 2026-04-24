import type { Metadata } from "next";
import Link from "next/link";
import AdminSidebar from "@/app/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin — Acme Corp",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#020817]">
      <aside className="w-64 shrink-0 border-r border-white/10 bg-[#0f172a] flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          <span className="font-bold text-white">
            Acme<span className="text-blue-400">Corp</span>
          </span>
          <Link href="/" className="text-xs text-slate-500 hover:text-blue-400 transition-colors">
            ← Site
          </Link>
        </div>
        <AdminSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto bg-[#020817]">
        {children}
      </main>
    </div>
  );
}
