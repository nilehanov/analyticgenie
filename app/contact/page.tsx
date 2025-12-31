export default function ContactPage() {
  return (
    <div className="container-balanced py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Contact</p>
        <h1 className="text-4xl font-semibold text-white">Talk with the team</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Tell us about your stack, metrics, and timeline. We’ll respond within one business day.
        </p>
      </div>
      <form className="grid gap-6 rounded-3xl border border-border bg-surface-elevated/60 p-8 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-text-muted">Name</span>
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
            placeholder="name@company.com"
            required
          />
        </label>
        <label className="space-y-2 text-sm md:col-span-2">
          <span className="text-text-muted">Company</span>
          <input
            className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-brand"
            placeholder="Company name"
          />
        </label>
        <label className="space-y-2 text-sm md:col-span-2">
          <span className="text-text-muted">What are you hoping to solve?</span>
          <textarea
            className="h-28 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-brand"
            placeholder="Share your goals, stack, or a current bottleneck."
          />
        </label>
        <button
          type="submit"
          className="md:col-span-2 rounded-full bg-gradient-to-r from-brand to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

