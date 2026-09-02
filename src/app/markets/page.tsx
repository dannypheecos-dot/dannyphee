import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Research on probability, uncertainty, structure, and decision-making. Not a signals service.",
  alternates: { canonical: "/markets" },
};

const topics = [
  {
    title: "Probability and uncertainty",
    copy: "Most of the useful work is naming what is known, what is guessed, and what would change the guess. I am less interested in certainty than in a clean statement of odds.",
  },
  {
    title: "Risk",
    copy: "Risk is not volatility as a slogan. It is what you can lose, how fast, and whether you will still be able to think afterward. Position, time, and temperament belong in the same notebook.",
  },
  {
    title: "Sector rotation",
    copy: "Leadership moves. Some of that is cycle, some of it is narrative, some of it is liquidity looking for a story. I want a way to watch the handoff without pretending I called it.",
  },
  {
    title: "Macro",
    copy: "Rates, growth, policy, and the mood that sits on top of the data. Macro is a weather report for the rest of the desk — useful when it stays humble.",
  },
  {
    title: "Market structure",
    copy: "How the game is actually played: sessions, flows, instruments, the difference between a price and a trade you can get. Structure is the part of the map that does not care about my opinion.",
  },
  {
    title: "Experiments and tools",
    copy: "I build small tools when a question keeps repeating. The point is not a product line. It is to see whether a process survives contact with new days.",
  },
  {
    title: "AI-assisted research",
    copy: "Agents can gather, compare, and argue with me. They cannot take the risk. The interesting work is the collaboration: a machine that challenges the story I want to be true.",
  },
  {
    title: "Independent work",
    copy: "Other market projects live on their own. This page stays the research desk. Links, if they earn a place, will be labeled as independent.",
  },
] as const;

export default function MarketsPage() {
  return (
    <article>
      <figure className="border-b border-white/10">
        <Image
          src="/images/dannyphee-markets-pillar-v1.png"
          alt=""
          width={1536}
          height={1024}
          unoptimized
          className="h-auto w-full max-w-full"
        />
      </figure>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">MARKETS</p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          Research, not signals.
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
        <div className="space-y-4 text-base leading-relaxed text-[#d8d3c8] md:space-y-5 md:text-[1.05rem]">
          <p>
            Markets are where I practice probability, uncertainty, and decision-making. The
            public work is the research desk: what I am looking at, what I tried, what I got
            wrong, what changed.
          </p>
          <p className="text-sm text-mute">This is not a signals service.</p>
        </div>
      </header>
      <div className="mx-auto max-w-measure px-5 pb-16 md:px-8 md:pb-20">
        <div className="topic-stack">
          {topics.map((topic) => (
            <article key={topic.title}>
              <h2>{topic.title}</h2>
              <p>{topic.copy}</p>
            </article>
          ))}
        </div>
        <aside className="mt-12 border-t border-white/10 pt-6 text-sm leading-relaxed text-mute md:mt-16 md:pt-8">
          <p className="text-[11px] tracking-nav text-gold">DISCLAIMER</p>
          <p className="mt-3">
            Educational and research notes only. Nothing on this site is investment advice,
            a recommendation, or an offer to buy or sell any security. Markets involve risk,
            including loss of capital. Past observations are not a track record and are not
            an invitation to follow trades.
          </p>
        </aside>
      </div>
    </article>
  );
}
