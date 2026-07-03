import type { Note } from "@/types/note";

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
    <div 
        className="
            bg-white
            dark:bg-gray-800
            rounded-xl
            shadow-md
            p-5
            mb-4
            ">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{note.title}</h2>

      <p className="text-gray-600 dark:text-gray-300 mt-2">{note.content}</p>

      <button 
        className="bg-yellow-500
             hover:bg-yellow-600 
            rounded-xl 
            transition 
            p-2 
            mb-2 
            text-gray-900" 
        onClick={() => onEdit(note)}>
        Edit
      </button>

      <button 
        className="bg-red-500
             hover:bg-red-600 
            rounded-xl 
            transition 
            p-2 
            mb-2 
            text-gray-900" 
      onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}