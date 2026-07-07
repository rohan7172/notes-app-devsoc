import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg
        bg-blue-600
        px-4
        py-2
        font-medium
        text-white
        transition-colors
        hover:bg-blue-700
        disabled:cursor-not-allowed
        disabled:opacity-50
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        ${className}
      `}
      {...props}
    />
  );
}