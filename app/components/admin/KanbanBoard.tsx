"use client";

import { useState, useCallback } from "react";
import KanbanColumn from "@/app/components/admin/KanbanColumn";
import { BoardState, ColumnId } from "@/app/components/admin/kanban-types";

const INITIAL_STATE: BoardState = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { id: "1", title: "Research competitor pricing" },
      { id: "2", title: "Write Q2 blog post" },
      { id: "3", title: "Set up analytics dashboard" },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    cards: [
      { id: "4", title: "Redesign onboarding flow" },
      { id: "5", title: "Fix login page on mobile" },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "6", title: "Launch new landing page" },
      { id: "7", title: "Migrate database to v2 schema" },
    ],
  },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState<BoardState>(INITIAL_STATE);

  const handleCardMove = useCallback((cardId: string, sourceColId: ColumnId, targetColId: ColumnId) => {
    if (sourceColId === targetColId) return;
    setColumns((prev) => {
      const next = prev.map((col) => ({ ...col, cards: [...col.cards] }));
      const src = next.find((c) => c.id === sourceColId)!;
      const tgt = next.find((c) => c.id === targetColId)!;
      const [card] = src.cards.splice(src.cards.findIndex((c) => c.id === cardId), 1);
      tgt.cards.push(card);
      return next;
    });
  }, []);

  const handleCardDelete = useCallback((cardId: string, columnId: ColumnId) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) }
          : col
      )
    );
  }, []);

  const handleCardAdd = useCallback((columnId: ColumnId, title: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, cards: [...col.cards, { id: crypto.randomUUID(), title }] }
          : col
      )
    );
  }, []);

  return (
    <div className="flex gap-4 h-full p-6 overflow-x-auto">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          onCardMove={handleCardMove}
          onCardDelete={handleCardDelete}
          onCardAdd={handleCardAdd}
        />
      ))}
    </div>
  );
}
