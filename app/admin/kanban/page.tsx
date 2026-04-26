import type { Metadata } from "next";
import KanbanBoard from "@/app/components/admin/KanbanBoard";

export const metadata: Metadata = {
  title: "Kanban — Admin",
};

export default function KanbanPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0 h-16 flex items-center justify-between px-8 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <h1 className="text-[20px] font-extrabold text-[#F0F6FC] tracking-[-0.02em]">Kanban Board</h1>
          <span className="px-2.5 py-0.5 rounded-full bg-[#3B82F6]/12 text-[#3B82F6] text-[12px] font-semibold border border-[#3B82F6]/20">
            Sprint 4
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-lg border border-white/10 text-[#6E7681] text-[13px] font-medium hover:text-[#F0F6FC] hover:bg-white/[0.06] transition-colors">
            Filter
          </button>
          <button className="px-4 py-1.5 rounded-lg bg-[#3B82F6] text-white text-[13px] font-semibold hover:bg-[#2563EB] transition-colors">
            + Add Card
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
  );
}
