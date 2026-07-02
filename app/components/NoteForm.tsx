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
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button type="submit">
        {isEditing ? "Update Note" : "Create Note"}
      </button>
    </form>
  );
}