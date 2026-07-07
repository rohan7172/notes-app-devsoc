import type { Note } from "@/types/note";
import NoteCard from "./NoteCard";

type NotesListProps = {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
};

export default function NotesList({
  notes,
  onDelete,
  onEdit,
}: NotesListProps) {
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No notes yet.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}