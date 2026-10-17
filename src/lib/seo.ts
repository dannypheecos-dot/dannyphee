import type { Metadata } from "next";
import { site } from "@/lib/site";

const ogImage = {
  url: "/images/og-default-1200x630.jpg",
  width: 1200,
  height: 630,
  alt: "Danny Phee: Presenting × Markets × AI",
};

// Next merges metadata shallowly: a page-level openGraph or twitter object REPLACES the
// layout one. Any page that sets either must restate siteName, locale, card and images,
// so build both from this helper.
export function pageSocial(opts: {
  path: string;
  title?: string;
  description?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const title = opts.title ?? `${site.name} \u2014 ${site.tagline}`;
  const description = opts.description ?? site.description;
  const base = {
    siteName: site.name,
    locale: "en_US",
    title,
    description,
    url: opts.path,
    images: [ogImage],
  };
  return {
    openGraph:
      opts.type === "article"
        ? { ...base, type: "article", publishedTime: opts.publishedTime }
        : { ...base, type: "website" },
    twitter: {
      card: "summary_large_image",
      site: site.handle,
      creator: site.handle,
      title,
      description,
      images: [ogImage.url],
    },
  };
}
