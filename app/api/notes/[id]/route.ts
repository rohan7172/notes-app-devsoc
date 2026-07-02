import {
  getNoteById,
  updateNote,
  deleteNote,
} from "@/lib/notes";

import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

// GET /api/notes/:id
export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const note = getNoteById(Number(id));

  if (!note) {
    return NextResponse.json(
      { error: "Note not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(note);
}

// PUT /api/notes/:id
export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const body = await request.json();

  const { title, content } = body;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required." },
      { status: 400 }
    );
  }

  const updatedNote = updateNote(
    Number(id),
    title,
    content
  );

  if (!updatedNote) {
    return NextResponse.json(
      { error: "Note not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(updatedNote);
}

// DELETE /api/notes/:id
export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const deleted = deleteNote(Number(id));

  if (!deleted) {
    return NextResponse.json(
      { error: "Note not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    message: "Note deleted successfully.",
  });
}