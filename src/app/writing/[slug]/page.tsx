import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TagList } from "@/components/PostMeta";
import { getPost, posts } from "@/lib/posts";
import { pageSocial } from "@/lib/seo";
import { realEstate, site } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    ...pageSocial({
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      path: `/writing/${post.slug}`,
    }),
  };
}

export default async function WritingPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const isRealEstate = post.tags.includes("Real Estate");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.description,
    url: `${site.url}/writing/${post.slug}/`,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mx-auto max-w-measure px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-20">
        <p className="mb-3 text-[11px] font-medium tracking-nav text-gold md:mb-4">
          <TagList tags={post.tags} />
          <span className="mx-2 text-mute">·</span>
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-2 text-mute">·</span>
          {post.minutes} min
        </p>
        <h1 className="font-display text-[2rem] leading-tight text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="hairline my-5 max-w-40 md:my-6" />
      </header>
      <div className="mx-auto max-w-measure px-5 pb-16 md:px-8 md:pb-20">
        <div className="prose-site">
          {post.body.map((block, i) =>
            block.type === "p" ? (
              <p key={i}>{block.text}</p>
            ) : (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          )}
          {post.source ? <p className="text-sm text-mute">{post.source}</p> : null}
          {post.footer ? (
            <p className="border-t border-white/10 pt-4 !text-base font-medium text-white">
              {post.footer}
            </p>
          ) : null}
          {isRealEstate ? (
            <p className="!text-sm text-mute">
              {realEstate.officeNote} {realEstate.equalHousing}
            </p>
          ) : null}
        </div>
        <p className="mt-10">
          <Link
            href="/writing"
            className="text-[11px] font-medium tracking-nav text-gold hover:text-gold-soft"
          >
            ← ALL WRITING
          </Link>
        </p>
      </div>
    </article>
  );
}
