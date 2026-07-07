"use client";

import { useEffect, useState } from "react";

import NoteCard from "./components/notes/NoteCard";
import NoteForm from "./components/notes/NoteForm";

import type { Note } from "@/types/note";
import NotesList from "./components/notes/NotesList";
import NotesToolbar from "./components/notes/NotesToolbar";
import SearchInput from "./components/notes/SearchInput";
import SortSelect from "./components/notes/SortSelect";

export default function Home() {
  // State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [sortBy, setSortBy] = useState<
  "newest" | "oldest" | "title-asc" | "title-desc"
>("newest");

  // Load notes
  useEffect(() => {
    async function fetchNotes() {
      const response = await fetch("/api/notes");
      const result = await response.json();

      setNotes(result.data);
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

  // SORTING, SEARCHING
  const filteredNotes = notes.filter((note) => {
    const query = searchQuery.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  });

  const sortedAndFilteredNotes = [...filteredNotes].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id;

      case "oldest":
        return a.id - b.id;

      case "title-asc":
        return a.title.localeCompare(b.title);

      case "title-desc":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });


  //______________________________________
  // UI 

  return (
    <main 
        className="
        min-h-screen
        bg-gray-100
        dark:bg-gray-900
        transition-colors
        duration-300
    ">
      <div className="
        max-w-2xl
        mx-auto
        p-8
        ">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          📝 Notes App
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Capture your ideas, reminders and thoughts in one place.
        </p>
      </div>

      <div className="
        bg-white
        dark:bg-gray-800
        rounded-xl
        shadow-md
        p-6
        mb-8
        ">
      
      <NotesToolbar>

          <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
          />

          <SortSelect
            value={sortBy}
            onChange={setSortBy}
          />

      </NotesToolbar>
      <div className="mt-15"></div>


      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        {editingNote ? "Edit Note" : "Create a New Note"}
      </h2>

      
      <NoteForm
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onSubmit={handleSubmit}
        isEditing={editingNote !== null}
      />
        </div>


      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
        Your Notes
      </h2>

      <NotesList
        notes={sortedAndFilteredNotes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      
      </div>
    </main>
  );
}