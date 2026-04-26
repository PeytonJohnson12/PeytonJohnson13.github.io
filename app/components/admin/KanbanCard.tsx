"use client";

import { useState } from "react";
import { KanbanCard as KanbanCardType, ColumnId, Priority } from "@/app/components/admin/kanban-types";

interface KanbanCardProps {
  card: KanbanCardType;
  columnId: ColumnId;
  onDelete: (cardId: string, columnId: ColumnId) => void;
}

const priorityStyles: Record<Priority, { bg: string; text: string; label: string }> = {
  high:   { bg: "rgba(239,68,68,0.12)",   text: "#F87171", label: "High" },
  medium: { bg: "rgba(245,158,11,0.12)",  text: "#FBBF24", label: "Medium" },
  low:    { bg: "rgba(99,102,241,0.12)",  text: "#A5B4FC", label: "Low" },
};

export default function KanbanCard({ card, columnId, onDelete }: KanbanCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isDone = columnId === "done";
  const isInProgress = columnId === "inprogress";

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ cardId: card.id, sourceColumnId: columnId })
    );
    e.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
  }

  const priority = card.priority ? priorityStyles[card.priority] : null;

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={() => setIsDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-xl border bg-[#0D1117] p-4 cursor-grab active:cursor-grabbing select-none transition-all duration-150"
      style={{
        borderColor: isDone ? "rgba(34,197,94,0.15)" : isHovered ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.07)",
        opacity: isDragging ? 0.45 : isDone ? 0.75 : 1,
        transform: isDragging ? "scale(0.97)" : undefined,
      }}
    >
      {/* Delete button */}
      <button
        onClick={() => onDelete(card.id, columnId)}
        className="absolute top-2.5 right-2.5 w-5 h-5 flex items-center justify-center rounded text-[#3B4454] hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all text-xs font-bold"
        aria-label="Delete card"
      >
        ×
      </button>

      {/* Done badge */}
      {isDone && (
        <div className="flex items-center gap-1.5 mb-2.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" fill="rgba(34,197,94,0.15)" />
            <path d="M4 7l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] font-semibold text-[#22C55E]">Completed</span>
        </div>
      )}

      {/* Priority badge */}
      {priority && !isDone && (
        <div
          className="inline-block mb-2.5 px-2 py-0.5 rounded text-[11px] font-semibold"
          style={{ background: priority.bg, color: priority.text }}
        >
          {priority.label}
        </div>
      )}

      {/* Title */}
      <p
        className="text-[14px] leading-snug font-medium pr-5"
        style={{ color: isDone ? "#6E7681" : "#F0F6FC", textDecoration: isDone ? "line-through" : "none" }}
      >
        {card.title}
      </p>

      {/* Progress bar (in-progress only) */}
      {isInProgress && card.progress != null && card.progress > 0 && (
        <div className="mt-3 rounded-md bg-[#F59E0B]/06 p-2.5">
          <div className="flex justify-between mb-1.5">
            <span className="text-[11px] text-[#6E7681]">Progress</span>
            <span className="text-[11px] font-semibold text-[#F59E0B]">{card.progress}%</span>
          </div>
          <div className="h-[3px] rounded-full bg-white/[0.08]">
            <div
              className="h-[3px] rounded-full bg-[#F59E0B] transition-all duration-500"
              style={{ width: `${card.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Footer: due date + assignee */}
      {(card.dueDate || card.assigneeColor) && (
        <div className="flex items-center mt-3">
          {card.dueDate && (
            <span className="text-[12px] text-[#3B4454]">{isDone ? card.dueDate : `Due ${card.dueDate}`}</span>
          )}
          {card.assigneeColor && (
            <div
              className="w-6 h-6 rounded-full shrink-0 ml-auto"
              style={{ background: card.assigneeColor }}
            />
          )}
        </div>
      )}
    </div>
  );
}
