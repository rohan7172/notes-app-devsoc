import { Note } from "@/types/note";

let notes: Note[] = [];

let nextId = 1;

export function getAllNotes(): Note[] {
  return notes;
}

export function getNoteById(id: number): Note | undefined {
  return notes.find((note) => note.id === id);
}

export function createNote(title: string, content: string): Note {
  const newNote: Note = {
    id: nextId++,
    title,
    content,
  };

  notes.push(newNote);

  return newNote;
}

export function updateNote(
  id: number,
  title: string,
  content: string
): Note | null {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return null;
  }

  note.title = title;
  note.content = content;

  return note;
}

export function deleteNote(id: number): boolean {
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return false;
  }

  notes.splice(index, 1);

  return true;
}