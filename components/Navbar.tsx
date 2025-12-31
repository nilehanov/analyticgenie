"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-30 mx-auto w-full max-w-6xl px-6 py-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="glass flex items-center justify-between rounded-full px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand to-sky-400 shadow-glow" />
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Analytic</p>
            <p className="text-lg font-semibold">Genie</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-text-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white hover:drop-shadow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="hidden rounded-full border border-border px-4 py-2 text-sm text-text-muted transition hover:border-white/40 hover:text-white md:inline-flex"
          >
            Request demo
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-brand to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

