import { CTA } from "@/components/CTA";

export default function PricingPage() {
  return (
    <div className="container-balanced py-16 space-y-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Pricing</p>
        <h1 className="text-4xl font-semibold text-white">Aligned with your growth</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Pricing is tailored to your stack, data requirements, and teams. Tell us where you are
          today and we’ll shape a plan that fits.
        </p>
      </div>
      <CTA />
    </div>
  );
}

