import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-measure px-5 py-28 md:px-8">
      <p className="text-[11px] tracking-nav text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl text-white">Not here.</h1>
      <p className="mt-4 text-mute">That page has not been written yet.</p>
      <Link
        href="/"
        className="mt-8 inline-flex text-[11px] tracking-nav text-gold hover:text-gold-soft"
      >
        BACK HOME
      </Link>
    </div>
  );
}
