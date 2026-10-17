import type { Metadata } from "next";
import Link from "next/link";
import { postsByDate } from "@/lib/posts";
import { realEstate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real estate",
  description: `Danny Phee is a licensed Las Vegas real estate agent with ${realEstate.brokerage}. Nevada license ${realEstate.licenseNumber}.`,
  alternates: { canonical: "/real-estate" },
};

export default function RealEstatePage() {
  const updates = postsByDate.filter((p) => p.tags.includes("Real Estate"));

  return (
    <article>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">
          REAL ESTATE
        </p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          Real estate
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
      </header>
      <div className="mx-auto max-w-measure px-5 pb-16 md:px-8 md:pb-20">
        <div className="prose-site">
          <p>
            I’m a licensed Las Vegas real estate agent with{" "}
            <strong>{realEstate.brokerage}</strong>. Real estate is where I started, and
            it’s still part of what I do, alongside presenting and markets rather than
            instead of them. I also keep an eye on local numbers, and I share a short Las
            Vegas market update each week, sourced to public data.
          </p>

          <p>
            If you’re thinking about buying or selling in the valley, reach out and we’ll
            start with a conversation.
          </p>

          <h2>Contact</h2>
          <address className="not-italic">
            <p>
              <strong>
                {realEstate.agentName}, {realEstate.agentTitle}
              </strong>
              <br />
              {realEstate.brokerage}
              <br />
              {realEstate.address.street}
              <br />
              {realEstate.address.city}, {realEstate.address.state}{" "}
              {realEstate.address.zip}
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${realEstate.email}`}>{realEstate.email}</a>
            </p>
          </address>
          <p>
            <a href={realEstate.kwProfileUrl} rel="noreferrer" target="_blank">
              View my Keller Williams profile →
            </a>
          </p>
          <p>
            <a href={realEstate.zillowReviewsUrl} rel="noreferrer" target="_blank">
              See what clients say on Zillow →
            </a>
          </p>
          <p className="!text-sm text-mute">
            Older site:{" "}
            <a href={realEstate.legacySiteUrl} rel="noreferrer" target="_blank">
              {realEstate.legacySiteLabel}
            </a>
          </p>

          <p>
            <Link href="/writing">Read the latest Las Vegas market updates →</Link>
          </p>

          <h2>Latest market updates</h2>
          <ul>
            {updates.map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>{" "}
                <span className="text-mute">· {post.date}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/10 pt-5">
            <p className="!text-base text-white">
              Danny Phee · {realEstate.licenseState} real estate license{" "}
              {realEstate.licenseNumber} ·{" "}
              <strong>{realEstate.brokerage}</strong>
            </p>
            <p className="!text-sm text-mute">
              {realEstate.officeNote} {realEstate.equalHousing}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
