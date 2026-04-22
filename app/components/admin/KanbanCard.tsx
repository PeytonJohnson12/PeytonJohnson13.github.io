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
      className={`group relative bg-white rounded-lg shadow-sm border border-gray-200 p-3 cursor-grab active:cursor-grabbing select-none transition-opacity ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <p className="text-sm text-gray-800 pr-5 leading-snug">{card.title}</p>
      <button
        onClick={() => onDelete(card.id, columnId)}
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded text-gray-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all text-xs font-bold"
        aria-label="Delete card"
      >
        ×
      </button>
    </div>
  );
}
