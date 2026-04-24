import type { Metadata } from "next";
import KanbanBoard from "@/app/components/admin/KanbanBoard";

export const metadata: Metadata = {
  title: "Kanban — Admin",
};

export default function KanbanPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0 px-6 py-4 border-b border-white/10 bg-[#0f172a]">
        <h1 className="text-xl font-semibold text-white">Kanban Board</h1>
        <p className="text-sm text-slate-400 mt-0.5">Drag cards between columns to update status.</p>
      </header>
      <div className="flex-1 overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
  );
}
