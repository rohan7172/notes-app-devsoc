import { TextareaHTMLAttributes } from "react";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`
        w-full
        rounded-lg
        border
        border-gray-300
        bg-white
        px-3
        py-2
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500
        dark:border-zinc-700
        dark:bg-zinc-800
        ${className}
      `}
      {...props}
    />
  );
}