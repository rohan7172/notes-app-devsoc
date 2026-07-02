import { Note } from "@/types/note";

type NoteCardProps = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
};

export default function NoteCard({
  note,
  onEdit,
  onDelete,
}: NoteCardProps) {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="font-bold">{note.title}</h2>

      <p>{note.content}</p>

      <div className="mt-2 flex gap-2">
        <button onClick={() => onEdit(note)}>
          Edit
        </button>

        <button onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}