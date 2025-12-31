import { CTA } from "@/components/CTA";
import { steps } from "@/lib/constants";

export default function ProductPage() {
  return (
    <div className="container-balanced py-16 space-y-14">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Product</p>
        <h1 className="text-4xl font-semibold text-white">How Analytic Genie works</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          A decision engine that connects to your stack, learns your business model, and delivers
          clear, explainable guidance in real time.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[0.55fr_0.45fr] md:items-center">
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="glass rounded-2xl p-6">
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand">
                  <step.icon size={18} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Step {idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4 rounded-3xl border border-border bg-surface-elevated/70 p-6">
          <div className="rounded-2xl border border-border/80 bg-white/5 p-5">
            <p className="text-sm text-text-muted">Explainability</p>
            <h3 className="text-xl font-semibold text-white">Why this recommendation?</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li>• Correlated drop in onboarding completion and latency.</li>
              <li>• High-confidence uplift projected from simplifying step 2.</li>
              <li>• Supporting cohort analysis across last 90 days.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-brand/10 to-sky-400/10 p-5">
            <p className="text-sm text-text-muted">Speed</p>
            <h3 className="text-xl font-semibold text-white">Realtime loop</h3>
            <p className="mt-2 text-sm text-text-muted">
              Signals update every time your data changes. Playbooks can trigger alerts, tickets, or
              actions automatically.
            </p>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}

