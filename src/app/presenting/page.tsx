import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Presenting",
  description:
    "Professional webinar presenting: live rooms, audience psychology, and the craft of getting people to act.",
  alternates: { canonical: "/presenting" },
};

const topics = [
  {
    title: "Webinar strategy",
    copy: "A webinar is a room with a clock. The work is deciding what the room is for, what the audience already believes, and what has to be true by the end. Strategy is the architecture. Delivery is what they remember.",
  },
  {
    title: "Live communication",
    copy: "Live is different from recorded. Attention moves. Questions arrive at the wrong time. The voice has to carry both the idea and the temperature of the room. I care about the seconds where a room either stays or leaves.",
  },
  {
    title: "Audience psychology",
    copy: "People do not act because they were given more information. They act when an idea fits a decision they were already circling. I study what lowers resistance, what creates permission, and what makes a close feel like a conclusion instead of a push.",
  },
  {
    title: "Storytelling",
    copy: "Story is not decoration. It is how a complicated product becomes a path someone can walk. The useful stories are specific: a decision, a risk, a turn, a result that can be examined.",
  },
  {
    title: "Persuasion",
    copy: "Persuasion is earned sequence. Setup, tension, proof, offer. Skip a step and the room feels it. I am interested in the ethics of that sequence as much as the mechanics — influence without theater.",
  },
  {
    title: "Offer presentation",
    copy: "An offer is a decision framed clearly enough to accept or refuse. Price, terms, and next step have to sit inside the logic of everything that came before. If the offer needs a new personality, the presentation was not finished.",
  },
  {
    title: "Presentation systems",
    copy: "Repeatable rooms need a system: research, outline, slides, run of show, recovery when something breaks. Systems keep the work from depending on a good night.",
  },
  {
    title: "AI before, during, and after",
    copy: "Before: research, structure, objection maps, tighter language. During: the human still holds the room. After: transcript, pacing, where attention dropped, what to cut. Agents can critique a presentation the way a sharp producer would — if they are pointed at the right questions.",
  },
  {
    title: "Critique and analysis",
    copy: "I want a second set of eyes that will not flatter me. AI-assisted webinar analysis is useful when it is specific: a muddy transition, a claim that needed one more beat, a close that arrived too early. The notes from that work will live here as they are written.",
  },
] as const;

export default function PresentingPage() {
  return (
    <article>
      <figure className="border-b border-white/10">
        <Image
          src="/images/dannyphee-presenting-pillar-v1.png"
          alt=""
          width={1536}
          height={1024}
          unoptimized
          className="h-auto w-full max-w-full"
        />
      </figure>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">
          PRESENTING
        </p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          Live rooms. Real audiences.
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
        <div className="space-y-4 text-base leading-relaxed text-[#d8d3c8] md:space-y-5 md:text-[1.05rem]">
          <p>
            I present professionally — webinars, often around financial products, to people
            who are actually in the room. The craft is communication under pressure:
            clarity, timing, trust, and the moment someone decides to act.
          </p>
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
      </div>
    </article>
  );
}
