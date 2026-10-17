import { realEstate, type WritingTag } from "@/lib/site";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  minutes: number;
  description: string;
  tags: WritingTag[];
  body: PostBlock[];
  /** Source/attribution line shown under the body. */
  source?: string;
  /** Compliance footer line shown under the body (real estate posts). */
  footer?: string;
};

const realEstateFooter = `Danny Phee | ${realEstate.licenseNumber} | ${realEstate.brokerage}`;

export const posts: Post[] = [
  {
    slug: "las-vegas-housing-check-in-september-2026",
    title: "Las Vegas housing check-in: September 2026",
    date: "2026-10-17",
    minutes: 1,
    description:
      "Valley-wide September numbers from Las Vegas REALTORS: prices steady, more homes to choose from.",
    tags: ["Real Estate", "Markets"],
    body: [
      { type: "p", text: "September data, released Oct 6:" },
      {
        type: "ul",
        items: [
          "Single-family median sold price: $470,000. Flat vs. a year ago, down 1.1% from August, about 4% under the May/June record of $490,000.",
          "Condo/townhome median: $290,000, down 1.4% year over year.",
          "Pace of sales equals about 5 months of supply, up from roughly 4 a year ago. 7,995 single-family homes were listed without an offer, up 6.6% from last year.",
          "About 76% of homes sold within 60 days.",
        ],
      },
      {
        type: "p",
        text: "Prices are holding steady while buyers have more to choose from. These are valley-wide numbers, not a prediction or advice for any one home.",
      },
    ],
    source: "Source: Las Vegas REALTORS MLS, Sept 2026.",
    footer: realEstateFooter,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postsByDate = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
