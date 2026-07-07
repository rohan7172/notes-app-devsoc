type NotesToolbarProps = {
  children?: React.ReactNode;
};

export default function NotesToolbar({
  children,
}: NotesToolbarProps) {
  return (
    <div
      className="
        mb-6
        flex
        flex-col
        gap-4
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        dark:border-zinc-700
        dark:bg-zinc-900
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {children}
    </div>
  );
}