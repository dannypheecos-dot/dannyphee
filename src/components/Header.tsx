"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  const current =
    pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return href === "/" ? current === "/" : current === href || current.startsWith(href);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="shrink-0 tracking-brand">
          <span className="text-[13px] font-medium text-white">DANNY</span>{" "}
          <span className="text-[13px] font-medium text-gold">PHEE</span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[11px] font-medium tracking-nav transition-colors ${
                      active ? "text-gold" : "text-paper/80 hover:text-gold"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-[11px] font-medium tracking-nav text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/10 bg-ink lg:hidden"
        >
          <ul className="flex flex-col px-5 py-3">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block min-h-11 py-3.5 text-sm tracking-nav ${
                      active ? "text-gold" : "text-paper"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
