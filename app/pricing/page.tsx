import { CTA } from "@/components/CTA";
import { pricing } from "@/lib/constants";

export default function PricingPage() {
  return (
    <div className="container-balanced py-16 space-y-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Pricing</p>
        <h1 className="text-4xl font-semibold text-white">Aligned with your growth</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Start fast, scale securely. Simple tiers, transparent value, and enterprise options when
          you need them.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-6 ${
              tier.highlight
                ? "border-brand/60 bg-gradient-to-br from-brand/10 via-surface-elevated to-sky-400/5 shadow-glow"
                : "border-border bg-surface-elevated/60"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              {tier.highlight && (
                <span className="rounded-full bg-brand/20 px-3 py-1 text-xs text-white">
                  Most popular
                </span>
              )}
            </div>
            <p className="text-3xl font-semibold text-white">{tier.price}</p>
            <p className="text-sm text-text-muted">{tier.cadence}</p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            {tier.name === "Enterprise" ? (
              <a
                href="mailto:contact@analyticgenie.com"
                className="mt-6 block w-full rounded-full border border-border px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                contact@analyticgenie.com
              </a>
            ) : (
              <button className="mt-6 w-full rounded-full border border-border px-4 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5">
                Start now
              </button>
            )}
          </div>
        ))}
      </div>
      <CTA />
    </div>
  );
}

