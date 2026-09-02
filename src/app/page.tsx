import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const journey = [
  {
    n: "01",
    title: "REAL ESTATE",
    line: "Entrepreneurship and selling.",
  },
  {
    n: "02",
    title: "PRESENTING",
    line: "Communication, persuasion, audience psychology.",
  },
  {
    n: "03",
    title: "MARKETS",
    line: "Probability, uncertainty, risk, decision-making.",
  },
  {
    n: "04",
    title: "AI",
    line: "The layer connecting everything.",
  },
] as const;

const pillars = [
  {
    href: "/presenting",
    title: "Presenting",
    src: "/images/dannyphee-presenting-pillar-v1.png",
    copy: "Live rooms. Financial products. The work of getting an audience to understand — and act.",
  },
  {
    href: "/markets",
    title: "Markets",
    src: "/images/dannyphee-markets-pillar-v1.png",
    copy: "Probability, structure, and decision-making under uncertainty.",
  },
  {
    href: "/ai-lab",
    title: "AI Lab",
    src: "/images/dannyphee-ai-lab-pillar-v1.png",
    copy: "A public laboratory. Build, test, break, learn, rebuild.",
  },
] as const;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  sameAs: [site.xUrl],
  jobTitle: "Presenter",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locale,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="bg-ink">
        <Image
          src="/images/x-banner.jpg"
          alt="Danny Phee — Presenting × Markets × AI. Approved X banner used as-is."
          width={1500}
          height={500}
          priority
          unoptimized
          className="h-auto w-full"
        />
      </section>
      <section className="mx-auto max-w-site px-5 py-6 md:px-8 md:py-10">
        <div className="flex items-start gap-4 md:gap-8">
          <figure className="editorial-portrait shrink-0">
            <Image
              src="/danny-phee-headshot-cutout.png"
              alt="Danny Phee"
              width={1024}
              height={1536}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </figure>
          <div className="min-w-0 pt-1">
            <p className="font-display text-xl leading-snug text-white sm:text-2xl md:text-[1.85rem]">
              I build, present, test and document what happens when human experience meets
              AI.
            </p>
            <a
              href={site.xUrl}
              className="mt-4 inline-flex text-[11px] font-medium tracking-nav text-gold hover:text-gold-soft"
              rel="noreferrer"
              target="_blank"
            >
              @{site.handle.replace("@", "")} ON X
            </a>
          </div>
        </div>
      </section>
      <section aria-labelledby="journey-heading" className="border-y border-white/10 bg-charcoal">
        <div className="mx-auto max-w-site px-5 py-6 md:px-8 md:py-10">
          <h2 id="journey-heading" className="text-[11px] font-medium tracking-nav text-gold">
            JOURNEY
          </h2>
          <p className="mt-2 max-w-measure text-sm text-mute">
            Each stage added a skill. Nothing was abandoned.
          </p>
          <figure className="mt-6 overflow-hidden">
            <Image
              src="/images/dannyphee-journey-v1.png"
              alt="Journey: real estate, presenting, markets, AI."
              width={1536}
              height={1024}
              priority
              unoptimized
              className="h-auto w-full max-w-full"
            />
          </figure>
          <ol className="journey-stages mt-6">
            {journey.map((stage) => (
              <li key={stage.title}>
                <p className="text-[10px] tracking-nav text-gold">{stage.n}</p>
                <p className="mt-1 text-[11px] font-medium tracking-nav text-white">
                  {stage.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#d8d3c8]">
                  {stage.line}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        aria-labelledby="pillars-heading"
        className="mx-auto max-w-site px-5 py-8 md:px-8 md:py-12"
      >
        <h2 id="pillars-heading" className="text-[11px] font-medium tracking-nav text-gold">
          PILLARS
        </h2>
        <div className="pillar-stack mt-5">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="pillar-card transition-colors hover:bg-charcoal"
            >
              <div className="pillar-card__title">
                <h3 className="font-display text-2xl text-white">{pillar.title}</h3>
              </div>
              <div className="pillar-card__visual">
                <figure>
                  <Image
                    src={pillar.src}
                    alt=""
                    width={1536}
                    height={1024}
                    unoptimized
                    className="h-auto w-full max-w-full"
                  />
                </figure>
              </div>
              <div className="pillar-card__copy">
                <div className="hairline mb-3 max-w-16" />
                <p className="text-sm leading-relaxed text-[#d8d3c8]">{pillar.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-site gap-8 px-5 py-8 md:grid-cols-2 md:gap-12 md:px-8 md:py-12">
          <div>
            <h2 className="text-[11px] font-medium tracking-nav text-gold">FOLLOW</h2>
            <p className="mt-3 font-display text-2xl text-white md:text-3xl">
              Follow what I’m building.
            </p>
            <a
              href={site.xUrl}
              className="mt-5 inline-flex text-[11px] font-medium tracking-nav text-gold hover:text-gold-soft"
              rel="noreferrer"
              target="_blank"
            >
              @{site.handle.replace("@", "")} ON X
            </a>
          </div>
          <div>
            <h2 className="text-[11px] font-medium tracking-nav text-gold">SELF TOUT</h2>
            <p className="mt-3 font-display text-2xl text-white md:text-3xl">
              A book in progress.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#d8d3c8]">
              Writing in public.
              <br />
              Publishing before the end of 2026.
            </p>
            <Link
              href="/self-tout"
              className="mt-5 inline-flex text-[11px] font-medium tracking-nav text-gold hover:text-gold-soft"
            >
              FOLLOW THE BUILD
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
