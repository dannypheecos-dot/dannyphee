export const site = {
  name: "Danny Phee",
  handle: "@DannyPhee",
  xUrl: "https://x.com/DannyPhee",
  url: "https://dannyphee.com",
  tagline: "PRESENTING × MARKETS × AI",
  description:
    "I build, present, test and document what happens when human experience meets AI.",
  locale: "Las Vegas",
} as const;

export const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/presenting", label: "PRESENTING" },
  { href: "/markets", label: "MARKETS" },
  { href: "/ai-lab", label: "AI LAB" },
  { href: "/writing", label: "WRITING" },
  { href: "/self-tout", label: "SELF TOUT" },
] as const;

export const writingCategories = [
  "PRESENTING",
  "MARKETS",
  "AI",
  "DECISION-MAKING",
  "BUILD LOG",
  "SELF TOUT NOTES",
] as const;

export type WritingCategory = (typeof writingCategories)[number];

export type WritingNote = {
  slug: string;
  title: string;
  category: WritingCategory;
  date: string;
  minutes: number;
  description?: string;
};

export const writingNotes: WritingNote[] = [];
