export const site = {
  name: "Danny Phee",
  handle: "@DannyPhee",
  xUrl: "https://x.com/DannyPhee",
  url: "https://dannyphee.com",
  tagline: "PRESENTING × MARKETS × AI",
  description:
    "I build, present, test and document what happens when human experience meets AI.",
  locale: "Las Vegas",
} as const;

// Nevada real estate licensing / advertising disclosure (NRS 645.315, NAC 645.610).
// License number confirmed by Danny; brokerage name must stay prominent wherever shown.
export const realEstate = {
  licenseState: "Nevada",
  licenseNumber: "S.0174898",
  brokerage: "Keller Williams Realty Las Vegas",
  officeNote: "Each office is independently owned and operated.",
  equalHousing: "Equal Housing Opportunity.",
  agentName: "Danny Phee",
  agentTitle: "REALTOR®",
  address: {
    street: "9420 W Sahara Ave, Suite 100",
    city: "Las Vegas",
    state: "NV",
    zip: "89117",
  },
  email: "thevegasrealestateagent@gmail.com",
  kwProfileUrl: "https://dannyphee.kw.com",
  zillowReviewsUrl: "https://www.zillow.com/profile/dannyphee/#reviews",
  // Older site; plain-text mention only, positioned as secondary.
  legacySiteLabel: "TheVegasRealEstateAgents.com",
  legacySiteUrl: "https://www.thevegasrealestateagents.com",
} as const;

export const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/presenting", label: "PRESENTING" },
  { href: "/markets", label: "MARKETS" },
  { href: "/ai-lab", label: "AI LAB" },
  { href: "/real-estate", label: "REAL ESTATE" },
  { href: "/writing", label: "WRITING" },
  { href: "/self-tout", label: "SELF TOUT" },
] as const;

export const writingTags = ["Markets", "Real Estate", "Sharp Wallet", "AI Lab"] as const;

export type WritingTag = (typeof writingTags)[number];

export function tagSlug(tag: WritingTag) {
  return tag.toLowerCase().replace(/\s+/g, "-");
}
