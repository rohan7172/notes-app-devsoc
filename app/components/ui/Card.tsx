import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
    className={`
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm

        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg

        dark:border-zinc-700
        dark:bg-zinc-900

        ${className}
    `}
    >
      {children}
    </div>
  );
}