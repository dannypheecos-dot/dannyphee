import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Las Vegas. Real estate, professional presenting, investing and trading, and AI-assisted market research.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">ABOUT</p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          A path, not a résumé.
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
      </header>
      <section className="about-portrait-strip" aria-label="Portrait of Danny Phee">
        <div className="about-portrait-strip__grain" aria-hidden="true" />
        <div className="about-portrait-strip__subject">
          <div className="about-portrait-strip__plate">
            <Image
              src="/danny-phee-headshot-cutout.png"
              alt="Danny Phee"
              width={1024}
              height={1536}
              priority
              unoptimized
              className="about-portrait-strip__img"
            />
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-measure px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12">
        <div className="prose-site">
          <p>
            I live and work in Las Vegas. My career has grown across real estate,
            professional webinar presenting, investing and trading, and now AI-assisted
            quantitative market research. These aren’t chapters I’ve left behind. They’re
            disciplines I continue to work in, and increasingly, they overlap.
          </p>
          <p>
            I’ve been an investor for more than a decade, across real estate, equities, and
            crypto, and I’m also an active trader. I bought my first whole Bitcoin in 2013
            for $997—not because I knew where it would eventually go, but because I was
            already interested in emerging markets, asymmetric opportunities, and what
            happens when conventional thinking meets something new.
          </p>
          <p>
            Today, I’m exploring what happens when that experience is combined with
            AI—building agents and research systems that can analyze markets, challenge
            assumptions, surface information, and help me make better decisions.
          </p>
          <p>
            I am not a formally trained quantitative researcher or AI engineer. I learn by
            building, testing, breaking things, and improving them.
          </p>
          <h2>The central idea</h2>
          <p>
            I keep learning complicated things, turning them into ideas people can follow,
            and making decisions under uncertainty.
          </p>
          <h2>Real estate</h2>
          <p>
            Before financial media and webinars, I built my career in real estate. I still
            maintain my real estate license and remain open to the right opportunities.
          </p>
          <h2>This chapter</h2>
          <p>
            I am documenting this chapter in public — what I build, what works, and what
            fails.
          </p>
        </div>
      </div>
    </article>
  );
}
