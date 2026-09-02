import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Self Tout",
  description:
    "A book in progress by Danny Phee. Writing in public. Publishing before the end of 2026.",
  alternates: { canonical: "/self-tout" },
};

export default function SelfToutPage() {
  return (
    <article>
      <figure className="border-b border-white/10">
        <Image
          src="/images/dannyphee-self-tout-treatment-v1.png"
          alt=""
          width={1536}
          height={1024}
          unoptimized
          className="h-auto w-full max-w-full"
        />
      </figure>
      <header className="mx-auto max-w-measure px-5 pb-8 pt-16 text-center md:px-8 md:pt-24">
        <p className="text-[11px] font-medium tracking-nav text-gold">SELF TOUT</p>
        <h1 className="mt-6 font-display text-4xl text-white md:text-5xl">
          A book in progress by Danny Phee.
        </h1>
        <div className="hairline mx-auto my-8 max-w-32" />
        <p className="text-lg text-[#d8d3c8]">Writing in public.</p>
        <p className="mt-2 text-lg text-[#d8d3c8]">Publishing before the end of 2026.</p>
        <a
          href={site.xUrl}
          className="mt-10 inline-flex text-[11px] font-medium tracking-nav text-gold hover:text-gold-soft"
          rel="noreferrer"
          target="_blank"
        >
          FOLLOW THE BUILD · @{site.handle.replace("@", "")}
        </a>
      </header>
      <div className="pb-20" />
    </article>
  );
}
