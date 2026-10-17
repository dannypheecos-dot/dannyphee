import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((n) => ({
    url: n.href === "/" ? `${site.url}/` : `${site.url}${n.href}/`,
  }));
  const writing = posts.map((p) => ({
    url: `${site.url}/writing/${p.slug}/`,
    lastModified: p.date,
  }));
  return [...pages, ...writing];
}
