import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { pageSocial } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  ...pageSocial({ path: "/" }),
};

const journey: ReadonlyArray<{ n: string; title: string; line: string; href?: string }> = [
  {
    n: "01",
    title: "REAL ESTATE",
    line: "Licensed in Las Vegas. Still practicing.",
    href: "/real-estate",
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
];

const pillars = [
  {
    href: "/presenting",
    title: "Presenting",
    src: "/images/dannyphee-presenting-pillar-v1",
    copy: "Live rooms. Financial products. The work of getting an audience to understand — and act.",
  },
  {
    href: "/markets",
    title: "Markets",
    src: "/images/dannyphee-markets-pillar-v1",
    copy: "Probability, structure, and decision-making under uncertainty.",
  },
  {
    href: "/ai-lab",
    title: "AI Lab",
    src: "/images/dannyphee-ai-lab-pillar-v1",
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/x-banner-1500.webp"
          srcSet="/images/x-banner-828.webp 828w, /images/x-banner-1500.webp 1500w"
          sizes="100vw"
          alt="Danny Phee: Presenting × Markets × AI"
          width={1500}
          height={500}
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full"
        />
      </section>
      <section className="mx-auto max-w-site px-5 py-6 md:px-8 md:py-10">
        <div className="flex items-start gap-4 md:gap-8">
          <figure className="editorial-portrait shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/danny-phee-headshot-300.webp"
              alt="Danny Phee"
              width={300}
              height={450}
              decoding="async"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dannyphee-journey-v1-1536.webp"
              srcSet="/images/dannyphee-journey-v1-768.webp 768w, /images/dannyphee-journey-v1-1536.webp 1536w"
              sizes="(min-width: 1152px) 1088px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
              alt="Journey: real estate, presenting, markets, AI."
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
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
                  {stage.href ? (
                    <Link
                      href={stage.href}
                      className="text-gold underline underline-offset-4 hover:text-gold-soft"
                    >
                      {stage.line}
                    </Link>
                  ) : (
                    stage.line
                  )}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${pillar.src}-1536.webp`}
                    srcSet={`${pillar.src}-768.webp 768w, ${pillar.src}-1536.webp 1536w`}
                    sizes="(min-width: 1152px) 363px, (min-width: 768px) calc((100vw - 66px) / 3), calc(100vw - 40px)"
                    alt=""
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
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
        <p className="mt-6 text-sm text-[#d8d3c8]">
          Also: licensed Las Vegas real estate agent →{" "}
          <Link href="/real-estate" className="text-gold underline underline-offset-4">
            Real estate
          </Link>
        </p>
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
