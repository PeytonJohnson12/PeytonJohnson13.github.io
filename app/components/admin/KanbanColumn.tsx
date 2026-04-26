"use client";

import { useState } from "react";
import KanbanCard from "@/app/components/admin/KanbanCard";
import { KanbanColumn as KanbanColumnType, ColumnId } from "@/app/components/admin/kanban-types";

interface KanbanColumnProps {
  column: KanbanColumnType;
  onCardMove: (cardId: string, sourceColId: ColumnId, targetColId: ColumnId) => void;
  onCardDelete: (cardId: string, columnId: ColumnId) => void;
  onCardAdd: (columnId: ColumnId, title: string) => void;
}

const columnMeta: Record<ColumnId, { dot: string; dragBorder: string; dragBg: string; badge: string; badgeText: string }> = {
  todo:       { dot: "#6E7681", dragBorder: "#3B82F6", dragBg: "rgba(59,130,246,0.06)",  badge: "rgba(255,255,255,0.08)", badgeText: "#6E7681" },
  inprogress: { dot: "#F59E0B", dragBorder: "#F59E0B", dragBg: "rgba(245,158,11,0.06)", badge: "rgba(245,158,11,0.12)", badgeText: "#F59E0B" },
  done:       { dot: "#22C55E", dragBorder: "#22C55E", dragBg: "rgba(34,197,94,0.06)",  badge: "rgba(34,197,94,0.12)",  badgeText: "#22C55E" },
};

export default function KanbanColumn({ column, onCardMove, onCardDelete, onCardAdd }: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [addingTitle, setAddingTitle] = useState<string | null>(null);
  const meta = columnMeta[column.id];

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(true);
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }
  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsDragOver(false);
  }
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
    try {
      const { cardId, sourceColumnId } = JSON.parse(e.dataTransfer.getData("text/plain"));
      if (sourceColumnId !== column.id) onCardMove(cardId, sourceColumnId, column.id);
    } catch { /* ignore malformed drag data */ }
  }
  function handleAddSave() {
    if (addingTitle?.trim()) onCardAdd(column.id, addingTitle.trim());
    setAddingTitle(null);
  }
  function handleAddKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAddSave(); }
    if (e.key === "Escape") setAddingTitle(null);
  }

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="flex flex-col w-72 shrink-0 rounded-xl p-3 border transition-all duration-200"
      style={{
        borderColor: isDragOver ? meta.dragBorder : "rgba(255,255,255,0.07)",
        background: isDragOver ? meta.dragBg : "rgba(255,255,255,0.02)",
        boxShadow: isDragOver ? `0 0 0 2px ${meta.dragBorder}33` : undefined,
      }}
    >
      <div className="flex items-center gap-2 mb-3 px-1">
        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: meta.dot }} />
        <h3 className="text-[13px] font-bold text-[#F0F6FC] uppercase tracking-[0.04em]">
          {column.title}
        </h3>
        <span
          className="ml-auto text-[11px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: meta.badge, color: meta.badgeText }}
        >
          {column.cards.length}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {column.cards.map((card) => (
          <KanbanCard
            key={card.id}
            card={card}
            columnId={column.id}
            onDelete={onCardDelete}
          />
        ))}
        <div className="flex-1 min-h-4" />
      </div>

      {addingTitle !== null ? (
        <>
          <textarea
            autoFocus
            rows={2}
            value={addingTitle}
            onChange={(e) => setAddingTitle(e.target.value)}
            onKeyDown={handleAddKeyDown}
            placeholder="Card title…"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.08] text-[#F0F6FC] placeholder:text-[#3B4454] p-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
          />
          <div className="flex gap-2 mt-1.5">
            <button
              onClick={handleAddSave}
              className="rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold px-3 py-1.5 transition-colors"
            >
              Add card
            </button>
            <button
              onClick={() => setAddingTitle(null)}
              className="rounded-lg text-[#6E7681] text-xs font-medium px-3 py-1.5 hover:bg-white/[0.06] hover:text-[#F0F6FC] transition-colors"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setAddingTitle("")}
          className="mt-2 flex items-center gap-1.5 w-full rounded-xl px-3 py-2.5 text-[13px] text-[#3B4454] hover:bg-white/[0.06] hover:text-[#6E7681] transition-colors border border-dashed border-white/[0.07]"
        >
          <span className="text-base leading-none">+</span> Add card
        </button>
      )}
    </div>
  );
}
