import { getAllNotes, createNote } from "@/lib/notes";
import { NextResponse } from "next/server";

// Handles GET /api/notes
export async function GET() {
  return NextResponse.json(getAllNotes());
}

// Handles POST /api/notes
export async function POST(request: Request) {
  const body = await request.json();

  const { title, content } = body;

  // Basic validation
  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required." },
      { status: 400 }
    );
  }

  const note = createNote(title, content);

  return NextResponse.json(note, { status: 201 });
}