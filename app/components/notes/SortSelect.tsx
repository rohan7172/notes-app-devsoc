import Select from "../ui/Select";
import { SortOption } from "@/types/note";

type SortSelectProps = {
  value: "newest" | "oldest" | "title-asc" | "title-desc";
  onChange: (
    value: "newest" | "oldest" | "title-asc" | "title-desc"
  ) => void;
};

export default function Sort({
  value,
  onChange,
}: SortSelectProps) {
  return (
    <Select
    value={value}
    onChange={(e) => onChange(e.target.value as SortOption)}
>
    <option value="newest">Newest</option>
    <option value="oldest">Oldest</option>
    <option value="title-asc">Title (A–Z)</option>
    <option value="title-desc">Title (Z–A)</option>
</Select>
  );
}