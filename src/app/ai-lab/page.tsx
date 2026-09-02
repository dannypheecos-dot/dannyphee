import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Lab",
  description:
    "A public laboratory for building with AI agents. Failures are part of the record.",
  alternates: { canonical: "/ai-lab" },
};

const framework = [
  ["01", "What I built"],
  ["02", "Why"],
  ["03", "Expected"],
  ["04", "Actually happened"],
  ["05", "Failed"],
  ["06", "Changed"],
  ["07", "Learned"],
] as const;

export default function AiLabPage() {
  return (
    <article>
      <figure className="border-b border-white/10">
        <Image
          src="/images/dannyphee-ai-lab-pillar-v1.png"
          alt=""
          width={1536}
          height={1024}
          unoptimized
          className="h-auto w-full max-w-full"
        />
      </figure>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">AI LAB</p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          A public laboratory.
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
        <div className="space-y-4 text-base leading-relaxed text-[#d8d3c8] md:space-y-5 md:text-[1.05rem]">
          <p>
            This is where the experiments get written down. Agents that research markets,
            challenge my thinking, analyze information, and critique work — tested in the
            open, including when they fail.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-measure px-5 pb-16 md:px-8 md:pb-20">
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {framework.map(([n, label]) => (
            <li
              key={n}
              className="border border-white/10 px-3 py-3 text-[11px] tracking-nav text-[#d8d3c8]"
            >
              <span className="block text-gold">{n}</span>
              <span className="mt-1 block text-white">{label}</span>
            </li>
          ))}
        </ol>
        <figure className="mt-10">
          <Image
            src="/images/dannyphee-build-cycle-v1.png"
            alt="Build, test, break, learn, rebuild."
            width={1536}
            height={1024}
            unoptimized
            className="h-auto w-full max-w-full"
          />
        </figure>
        <section className="mt-12">
          <h2 className="text-[11px] font-medium tracking-nav text-gold">
            LATEST EXPERIMENTS
          </h2>
          <p className="mt-4 text-[#d8d3c8]">Experiments are being documented.</p>
        </section>
      </div>
    </article>
  );
}
