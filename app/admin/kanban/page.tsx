import type { Metadata } from "next";
import KanbanBoard from "@/app/components/admin/KanbanBoard";

export const metadata: Metadata = {
  title: "Kanban — Admin",
};

export default function KanbanPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0 px-6 py-4 border-b border-gray-200 bg-white">
        <h1 className="text-xl font-semibold text-gray-900">Kanban Board</h1>
        <p className="text-sm text-gray-500 mt-0.5">Drag cards between columns to update status.</p>
      </header>
      <div className="flex-1 overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
  );
}
