"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  writingCategories,
  type WritingCategory,
  type WritingNote,
} from "@/lib/site";

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 px-2.5 text-[10px] font-medium tracking-nav sm:text-[11px] ${
        active ? "text-gold" : "text-mute hover:text-paper"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

export function WritingArchive({ notes }: { notes: WritingNote[] }) {
  const [selected, setSelected] = useState<"ALL" | WritingCategory>("ALL");
  const visible = useMemo(
    () => (selected === "ALL" ? notes : notes.filter((note) => note.category === selected)),
    [selected, notes],
  );

  return (
    <>
      <div className="flex flex-wrap gap-2 border-y border-white/10 py-3">
        <FilterButton active={selected === "ALL"} onClick={() => setSelected("ALL")}>
          ALL
        </FilterButton>
        {writingCategories.map((category) => (
          <FilterButton
            key={category}
            active={selected === category}
            onClick={() => setSelected(category)}
          >
            {category}
          </FilterButton>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-measure">
        {visible.length === 0 ? (
          <p className="text-[#d8d3c8]">
            {notes.length === 0
              ? "Nothing has been filed yet."
              : "Nothing in this category yet."}
          </p>
        ) : (
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {visible.map((note) => (
              <li key={note.slug} className="py-6">
                <p className="text-[11px] tracking-nav text-gold">
                  {note.category}
                  <span className="mx-2 text-mute">·</span>
                  <time dateTime={note.date}>{note.date}</time>
                  <span className="mx-2 text-mute">·</span>
                  {note.minutes} min
                </p>
                <h2 className="mt-2 font-display text-2xl text-white">
                  <Link href={`/writing/${note.slug}`} className="hover:text-gold">
                    {note.title}
                  </Link>
                </h2>
                {note.description ? (
                  <p className="mt-2 text-sm text-mute">{note.description}</p>
                ) : null}
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
