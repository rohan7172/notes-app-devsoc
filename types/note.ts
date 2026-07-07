export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export type SortOption =
    | "newest"
    | "oldest"
    | "title-asc"
    | "title-desc";