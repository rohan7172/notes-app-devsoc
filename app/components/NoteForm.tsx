import React from "react";

type NoteFormProps = {
  title: string;
  content: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isEditing: boolean;
};

export default function NoteForm({
  title,
  content,
  setTitle,
  setContent,
  onSubmit,
  isEditing,
}: NoteFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <input
            className="
                w-full
                rounded-lg
                border
                border-gray-300
                dark:border-gray-600
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                p-3
                mb-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        className="
            w-full
            rounded-lg
            border
            border-gray-300
            dark:border-gray-600
            bg-white
            dark:bg-gray-700
            text-gray-900
            dark:text-white
            p-3
            mb-4
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            min-h-32
            "
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button
            className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-medium
                px-5
                py-3
                rounded-lg
                transition
                "
        type="submit">
        {isEditing ? "Update Note" : "Create Note"}
      </button>
    </form>
  );
}