type ValidationResult =
  | {
      success: true;
    }
  | {
      success: false;
      error: string;
    };


export function validateNoteInput(
  title: unknown,
  content: unknown
): ValidationResult {

  if (
    typeof title !== "string" ||
    typeof content !== "string"
  ) {
    return {
      success: false,
      error: "Title and content are required."
    };
  }


  if (
    title.trim().length === 0 ||
    content.trim().length === 0
  ) {
    return {
      success: false,
      error: "Title and content cannot be empty."
    };
  }


  return {
    success: true,
  };
}