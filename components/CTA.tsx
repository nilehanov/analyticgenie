import Link from "next/link";
import { companyInfo } from "@/lib/constants";

export function CTA() {
  return (
    <section className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-surface-elevated/80 to-surface-elevated/40 p-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">Ready to Work Together?</h2>
        <p className="mt-4 text-text-muted">
          Contact us to discuss your mission requirements. We are ready to support your 
          agency with AI, data analytics, and software development expertise.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
          >
            Contact Us
          </Link>
          <a
            href={`mailto:${companyInfo.email}?subject=Capability Statement Request`}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-muted transition hover:border-white/40 hover:text-white"
          >
            Request Capability Statement
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-text-muted">
          <span>UEI: {companyInfo.uei}</span>
          <span>•</span>
          <span>CAGE: {companyInfo.cage}</span>
          <span>•</span>
          <span>Small Business</span>
        </div>
      </div>
    </section>
  );
}
