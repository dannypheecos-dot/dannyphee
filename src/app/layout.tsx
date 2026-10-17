import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { realEstate, site } from "@/lib/site";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.xUrl }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/x-banner.jpg",
        width: 1500,
        height: 500,
        alt: "Approved X banner for Danny Phee: Presenting × Markets × AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.handle,
    creator: site.handle,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/x-banner.jpg"],
  },
};

export const viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-gold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-8 text-xs tracking-nav text-mute md:flex-row md:items-center md:justify-between md:px-8 md:py-10">
            <p>
              © {2026} {site.name}
              <span className="mx-2 text-gold">·</span>
              <a
                href={site.xUrl}
                className="hover:text-gold"
                rel="noreferrer"
                target="_blank"
              >
                @{site.handle.replace("@", "")}
              </a>
              <span className="mx-2 text-gold">·</span>
              {site.locale}
            </p>
            <p className="text-sm tracking-normal text-paper md:text-right">
              Licensed {realEstate.licenseState} real estate agent
              <span className="mx-2 text-gold">·</span>
              <span className="font-medium">{realEstate.brokerage}</span>
              <span className="mx-2 text-gold">·</span>
              {realEstate.licenseNumber}
              <span className="block text-xs text-mute">
                <a href={`mailto:${realEstate.email}`} className="hover:text-gold">
                  {realEstate.email}
                </a>
              </span>
              <span className="block text-xs text-mute">
                {realEstate.officeNote} {realEstate.equalHousing}
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
