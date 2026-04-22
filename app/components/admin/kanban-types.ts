export interface KanbanCard {
  id: string;
  title: string;
}

export type ColumnId = "todo" | "inprogress" | "done";

export interface KanbanColumn {
  id: ColumnId;
  title: string;
  cards: KanbanCard[];
}

export type BoardState = KanbanColumn[];
