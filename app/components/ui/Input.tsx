import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        w-full
        rounded-lg
        border
        border-gray-300
        bg-white
        px-3
        py-2
        text-sm
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