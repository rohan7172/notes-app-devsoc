import { getAllNotes, createNote } from "@/lib/notes";
import { NextResponse } from "next/server";

import { successResponse, errorResponse } from "@/lib/api-response";

import { validateNoteInput } from "@/lib/validation";

// Handles GET /api/notes
export async function GET() {
  return successResponse(getAllNotes());
}

// Handles POST /api/notes
export async function POST(request: Request) {
  const body = await request.json();


  // Basic validation
  const { title, content } = body;

    const validation = validateNoteInput(
    title,
    content
    );

    if (!validation.success) {
        return errorResponse(
            validation.error,
            400
        );
    }

  
  const note = createNote(title, content);

  return successResponse(note, 201 );
}