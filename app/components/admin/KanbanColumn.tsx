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

export default function KanbanColumn({ column, onCardMove, onCardDelete, onCardAdd }: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [addingTitle, setAddingTitle] = useState<string | null>(null);

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
    try {
      const { cardId, sourceColumnId } = JSON.parse(e.dataTransfer.getData("text/plain"));
      if (sourceColumnId !== column.id) {
        onCardMove(cardId, sourceColumnId, column.id);
      }
    } catch {
      // ignore malformed drag data
    }
  }

  function handleAddSave() {
    if (addingTitle?.trim()) {
      onCardAdd(column.id, addingTitle.trim());
    }
    setAddingTitle(null);
  }

  function handleAddKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddSave();
    }
    if (e.key === "Escape") {
      setAddingTitle(null);
    }
  }

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex flex-col w-72 shrink-0 rounded-xl p-3 border transition-all duration-200 ${
        isDragOver
          ? "border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/30"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="font-semibold text-sm text-slate-200">{column.title}</h3>
        <span className="text-xs text-slate-500 bg-white/10 rounded-full px-2 py-0.5 border border-white/10">
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
        {/* Ensures the column is a valid drop target even when empty */}
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
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 text-white placeholder:text-slate-500 p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2 mt-1.5">
            <button
              onClick={handleAddSave}
              className="rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-3 py-1.5 transition-colors"
            >
              Add card
            </button>
            <button
              onClick={() => setAddingTitle(null)}
              className="rounded-md text-slate-400 text-xs font-medium px-3 py-1.5 hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setAddingTitle("")}
          className="mt-2 flex items-center gap-1.5 w-full rounded-lg px-2 py-1.5 text-sm text-slate-500 hover:bg-white/10 hover:text-slate-300 transition-colors"
        >
          <span className="text-base leading-none">+</span> Add a card
        </button>
      )}
    </div>
  );
}
