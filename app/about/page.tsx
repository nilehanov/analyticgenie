import { CTA } from "@/components/CTA";
import { companyInfo, founderInfo, differentiators } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="container-balanced py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">About Us</p>
        <h1 className="text-4xl font-semibold text-white">Trusted Technology Partner</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Analytic Genie LLC is a Small Business specializing in artificial intelligence, machine learning, 
          and data analytics solutions. We serve government agencies, prime contractors, and commercial 
          enterprises with deep technical expertise and a mission-first approach.
        </p>
      </div>

      {/* Company Credentials */}
      <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">Business Type</p>
          <p className="mt-2 text-2xl font-semibold text-white">Small Business</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">SAM.gov Status</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">Active</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">Experience</p>
          <p className="mt-2 text-2xl font-semibold text-white">10+ Years</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">U.S. Patents</p>
          <p className="mt-2 text-2xl font-semibold text-white">4 Patents</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold text-white">Why Analytic Genie</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold text-white">Leadership</h2>
        <div className="glass rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <p className="text-xl font-semibold text-brand">{founderInfo.title}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-white mb-2">Experience</p>
                <p className="text-sm text-text-muted">{founderInfo.experience}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-2">Patents</p>
                <p className="text-sm text-text-muted">{founderInfo.patents}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Education</p>
              <ul className="space-y-1 text-sm text-text-muted">
                {founderInfo.education.map((edu) => (
                  <li key={edu}>• {edu}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Background</p>
              <ul className="space-y-1 text-sm text-text-muted">
                {founderInfo.background.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* NAICS Codes */}
      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold text-white">NAICS Codes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {companyInfo.naicsCodes.map((naics) => (
            <div key={naics.code} className="glass rounded-xl p-4">
              <p className="text-lg font-semibold text-brand">{naics.code}</p>
              <p className="text-sm text-text-muted">{naics.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
