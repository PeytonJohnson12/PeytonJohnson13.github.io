"use client";

import { useState } from "react";
import { KanbanCard as KanbanCardType, ColumnId } from "@/app/components/admin/kanban-types";

interface KanbanCardProps {
  card: KanbanCardType;
  columnId: ColumnId;
  onDelete: (cardId: string, columnId: ColumnId) => void;
}

export default function KanbanCard({ card, columnId, onDelete }: KanbanCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ cardId: card.id, sourceColumnId: columnId })
    );
    e.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={() => setIsDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      className={`group relative rounded-lg border border-white/10 bg-[#1e293b] p-3 cursor-grab active:cursor-grabbing select-none transition-all duration-200 hover:border-blue-500/30 hover:bg-[#263348] ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <p className="text-sm text-slate-200 pr-5 leading-snug">{card.title}</p>
      <button
        onClick={() => onDelete(card.id, columnId)}
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded text-slate-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all text-xs font-bold"
        aria-label="Delete card"
      >
        ×
      </button>
    </div>
  );
}
