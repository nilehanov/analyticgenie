import { CTA } from "@/components/CTA";

const pillars = [
  {
    title: "Explainability first",
    body: "Every recommendation is paired with traceable rationale, confidence, and the underlying signals."
  },
  {
    title: "Human-centered automation",
    body: "We design for humans in the loop — approvals, overrides, and learning loops keep control clear."
  },
  {
    title: "Security by default",
    body: "Least-privilege access, audit trails, and governance controls ensure enterprise-grade trust."
  }
];

export default function AboutPage() {
  return (
    <div className="container-balanced py-16">
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">About</p>
        <h1 className="text-4xl font-semibold text-white">Why Analytic Genie exists</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Decisions still move slowly because insights are fragmented, dashboards are noisy, and
          automations are opaque. Analytic Genie brings clarity: a trustworthy AI layer that speaks
          the language of your business and drives action.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="text-text-muted">
            Make every team feel like they have a world-class analyst — instantly available,
            explainable, and aligned with their goals.
          </p>
        </div>
        <div className="glass rounded-2xl border border-border p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Values</p>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
            <li>• Ship clarity over complexity.</li>
            <li>• Earn trust with transparency.</li>
            <li>• Automate, but keep humans in command.</li>
            <li>• Measure outcomes, not output.</li>
          </ul>
        </div>
      </div>
      <CTA />
    </div>
  );
}

