"use client";

import { useEffect, useState } from "react";

import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";

import type { Note } from "@/types/note";

export default function Home() {
  // State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // Load notes
  useEffect(() => {
    async function fetchNotes() {
      const response = await fetch("/api/notes");
      const data = await response.json();

      setNotes(data);
    }

    fetchNotes();
  }, []);

  // Edit button
  function handleEdit(note: Note) {
    setTitle(note.title);
    setContent(note.content);
    setEditingNote(note);
  }

  // Delete
  async function handleDelete(id: number) {
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });

    setNotes(notes.filter((note) => note.id !== id));
  }


  // Create / Update
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    if (editingNote) {
      const response = await fetch(`/api/notes/${editingNote.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const updatedNote: Note = await response.json();

      setNotes(
        notes.map((note) =>
          note.id === updatedNote.id ? updatedNote : note
        )
      );

      setEditingNote(null);
    } else {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const newNote: Note = await response.json();

      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
  }

  //______________________________________
  // UI 

  return (
    <main>
      <h1>Notes App</h1>

      <NoteForm
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onSubmit={handleSubmit}
        isEditing={editingNote !== null}
      />

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </main>
  );
}