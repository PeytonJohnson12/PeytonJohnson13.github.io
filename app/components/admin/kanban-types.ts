export type Priority = "high" | "medium" | "low";

export interface KanbanCard {
  id: string;
  title: string;
  priority?: Priority;
  dueDate?: string;
  progress?: number;
  assigneeColor?: string;
}

export type ColumnId = "todo" | "inprogress" | "done";

export interface KanbanColumn {
  id: ColumnId;
  title: string;
  cards: KanbanCard[];
}

export type BoardState = KanbanColumn[];
