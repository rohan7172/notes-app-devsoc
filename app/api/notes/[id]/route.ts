import {
  getNoteById,
  updateNote,
  deleteNote,
} from "@/lib/notes";

import {
  successResponse,
  errorResponse
} from "@/lib/api-response";

import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { validateNoteInput } from "@/lib/validation";


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
    return errorResponse(
      "Note not found.",
      404
    );
  }

  return successResponse(note);
}


// PUT /api/notes/:id
export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const body = await request.json();

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
  


  const updatedNote = updateNote(
    Number(id),
    title,
    content
  );


  if (!updatedNote) {
    return errorResponse(
      "Note not found.",
      404
    );
  }


  return successResponse(updatedNote);
}


// DELETE /api/notes/:id
export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const deleted = deleteNote(Number(id));


  if (!deleted) {
    return errorResponse(
      "Note not found.",
      404
    );
  }


  return successResponse({
    message: "Note deleted successfully."
  });
}