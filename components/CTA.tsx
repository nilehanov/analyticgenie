import Link from "next/link";

export function CTA() {
  return (
    <section className="container-balanced py-16">
      <div className="glass relative overflow-hidden rounded-3xl border border-border px-8 py-10 md:px-12">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Ready to move</p>
            <h3 className="text-2xl font-semibold text-white">
              See how Analytic Genie changes your next decision.
            </h3>
            <p className="max-w-xl text-text-muted">
              Get a tailored walkthrough for your stack, KPIs, and governance requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="rounded-full bg-gradient-to-r from-brand to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
            >
              Request a demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-muted transition hover:border-white/40 hover:text-white"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

