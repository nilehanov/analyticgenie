export default function DemoPage() {
  return (
    <div className="container-balanced py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Demo</p>
        <h1 className="text-4xl font-semibold text-white">Request a tailored walkthrough</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          We’ll pair you with a specialist, connect to your sandbox data, and show how Analytic Genie
          fits your KPIs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <form className="space-y-4 rounded-3xl border border-border bg-surface-elevated/60 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-text-muted">Full name</span>
              <input
                className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-brand"
                placeholder="Your name"
                required
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-text-muted">Work email</span>
              <input
                type="email"
                className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-brand"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>
          <label className="space-y-2 text-sm">
            <span className="text-text-muted">Team size</span>
            <select className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-brand">
              <option className="bg-surface-elevated">1-20</option>
              <option className="bg-surface-elevated">21-100</option>
              <option className="bg-surface-elevated">101-500</option>
              <option className="bg-surface-elevated">501+</option>
            </select>
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-text-muted">Primary goal</span>
            <textarea
              className="h-28 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-brand"
              placeholder="Example: speed up weekly exec reporting, automate SLA alerts, etc."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-brand to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
          >
            Request demo
          </button>
          <p className="text-center text-xs text-text-muted">
            We respond within one business day. SOC2 report available on request.
          </p>
        </form>
        <div className="space-y-4 rounded-3xl border border-border bg-surface-elevated/60 p-6">
          <h3 className="text-xl font-semibold text-white">What to expect</h3>
          <ul className="space-y-3 text-sm text-text-muted">
            <li>• Live walkthrough using your metrics and decision flows.</li>
            <li>• Security and governance deep dive for your compliance needs.</li>
            <li>• Tailored rollout plan with milestones and owners.</li>
          </ul>
          <div className="rounded-2xl border border-border/80 bg-white/5 p-5">
            <p className="text-sm text-text-muted">Time-to-value</p>
            <p className="text-3xl font-semibold text-white">Under 2 weeks</p>
            <p className="mt-2 text-sm text-text-muted">
              Connect data, configure playbooks, and ship your first automated decision loop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

