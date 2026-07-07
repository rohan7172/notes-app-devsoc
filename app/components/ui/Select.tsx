import { Children, SelectHTMLAttributes } from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Input({
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={`
        min-w:180px
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
    >
        {children}
    </select>
  );
}