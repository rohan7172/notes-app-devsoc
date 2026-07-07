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
    <form onSubmit={onSubmit} className="mb-6 space-y-5">
      <label
          className="
              block
              mb-2
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300
          "
      >
          Title
      </label>

      <Input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label
          className="
              block
              mb-2
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300
          "
      >
          Content
      </label>


      <Textarea
        value={content}
        placeholder="Write your content here..."
        onChange={(e) => setContent(e.target.value)}
        />

      
      <div className="flex justify-start">
          <Button type="submit">
              {isEditing ? "Update Note" : "Create Note"}
          </Button>
      </div>
  
      
    </form>
  );
}