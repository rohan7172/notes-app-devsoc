import React from "react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

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
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />

      <br />

        <Button type="submit">
            {isEditing ? "Update Note" : "Create Note"}
            Save Note
        </Button>
    </form>
  );
}