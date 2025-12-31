import Link from "next/link";
import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-elevated/60 py-10">
      <div className="container-balanced flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Analytic Genie</p>
          <p className="text-sm text-text-muted">Turn data into decisions — instantly.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/demo" className="rounded-full border border-border px-4 py-2 text-sm hover:border-white/40 hover:text-white">
            Request demo
          </Link>
        </div>
      </div>
    </footer>
  );
}

