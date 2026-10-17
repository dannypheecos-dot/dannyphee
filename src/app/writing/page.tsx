import type { Metadata } from "next";
import { WritingArchive } from "@/components/WritingArchive";
import { postsByDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on markets, real estate, Sharp Wallet, and the AI Lab.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <article>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">WRITING</p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          The record.
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
        <div className="space-y-4 text-base leading-relaxed text-[#d8d3c8] md:space-y-5 md:text-[1.05rem]">
          <p>Essays and notes, filed as they are finished.</p>
          <p>
            <a href="/feed.xml" className="text-gold underline underline-offset-4">
              RSS feed
            </a>
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-site px-5 pb-16 md:px-8 md:pb-20">
        <WritingArchive notes={postsByDate} />
      </div>
    </article>
  );
}
