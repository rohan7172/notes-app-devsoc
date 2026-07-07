import type { Note } from "@/types/note";
import Card from "../ui/Card"

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

  const formattedDate = new Date(note.createdAt).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <Card className="mb-4">
    
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{note.title}</h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{note.content}</p>
      
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Created {formattedDate}
      </p>

      <div className="mt-5 flex justify-end gap-3">
      <button 
        className="bg-yellow-500
                  hover:bg-yellow-600 
                  rounded-xl 
                  transition-colors
                  duration-200
                  p-2 
                  mb-2 
                  text-white" 
        onClick={() => onEdit(note)}>
        Edit
      </button>

      <button 
          className="bg-red-500
              hover:bg-red-600 
              rounded-xl  
              px-4
              py-2
              font-medium
              transition-colors
              mb-2 
              text-white" 
        onClick={() => onDelete(note.id)}>
          Delete
      </button>
      </div>
    </Card>
  );
}