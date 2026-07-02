"use client";

import { useEffect, useState } from "react";
import type { Note } from "@/types/note";


export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  useEffect(() => {
    async function fetchNotes() {
        const response = await fetch("/api/notes");
        const data = await response.json();

        setNotes(data);
    }

    fetchNotes();
  }, []);


  async function handleDelete(id: number) {
    await fetch(`/api/notes/${id}`, {
        method: "DELETE",
    });

    setNotes(notes.filter((note) => note.id !== id));
  }


  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
) {
    if (!title.trim() || !content.trim()) {
    return;
    }
    event.preventDefault();

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

    setTitle("");
    setContent("");
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Notes App
      </h1>

      <form 
        onSubmit={handleSubmit}
        className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded"
          rows={4}
        />

        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
        >
            {editingNote ? "Update Note" : "Add Note"}
        </button>
      </form>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Your Notes
        </h2>

        {notes.length === 0 ? (
            <p>No notes yet.</p>
        ) : (
            notes.map((note) => (
                <div
                    key={note.id}
                    className="border rounded p-4 mb-4"
                >
                    <h3 className="font-bold text-lg">
                        {note.title}
                    </h3>

                    <p>{note.content}</p>

                    <button
                      onClick={() => {
                          setEditingNote(note);
                          setTitle(note.title);
                          setContent(note.content);
                      }}
                      className="mt-3 mr-2 bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                </div>
            ))
        )}
      </div>
    </main>
  );
}