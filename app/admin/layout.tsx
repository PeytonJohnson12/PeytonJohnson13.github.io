import type { Metadata } from "next";
import Link from "next/link";
import AdminSidebar from "@/app/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin — Acme Corp",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 shrink-0 border-r border-gray-200 bg-white flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <span className="font-semibold text-gray-900">Admin Panel</span>
          <Link href="/" className="text-xs text-gray-400 hover:text-brand transition-colors">
            ← Site
          </Link>
        </div>
        <AdminSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}
