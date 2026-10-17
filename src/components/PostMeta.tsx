import type { WritingTag } from "@/lib/site";

export function TagList({ tags }: { tags: readonly WritingTag[] }) {
  return <>{tags.map((t) => t.toUpperCase()).join(" / ")}</>;
}
