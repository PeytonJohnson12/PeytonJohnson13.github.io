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
      className={`flex flex-col w-72 shrink-0 rounded-xl p-3 transition-colors ${
        isDragOver ? "bg-brand/10 ring-2 ring-brand" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="font-semibold text-sm text-gray-700">{column.title}</h3>
        <span className="text-xs text-gray-400 bg-white rounded-full px-2 py-0.5 border border-gray-200">
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
            className="mt-2 w-full rounded-lg border border-gray-300 p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <div className="flex gap-2 mt-1.5">
            <button
              onClick={handleAddSave}
              className="rounded-md bg-brand text-white text-xs font-medium px-3 py-1.5 hover:bg-brand-dark transition-colors"
            >
              Add card
            </button>
            <button
              onClick={() => setAddingTitle(null)}
              className="rounded-md text-gray-500 text-xs font-medium px-3 py-1.5 hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setAddingTitle("")}
          className="mt-2 flex items-center gap-1.5 w-full rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
        >
          <span className="text-base leading-none">+</span> Add a card
        </button>
      )}
    </div>
  );
}
