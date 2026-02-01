import { CTA } from "@/components/CTA";
import { companyInfo, founderInfo, differentiators } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="container-balanced py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">About Us</p>
        <h1 className="text-4xl font-semibold text-white">Trusted Partner for Federal Missions</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Analytic Genie LLC is a Small Business specializing in artificial intelligence, machine learning, 
          and data analytics solutions for federal government agencies. We combine deep technical expertise 
          with an understanding of government operations to deliver mission-critical solutions.
        </p>
      </div>

      {/* Company Credentials */}
      <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">Unique Entity ID (UEI)</p>
          <p className="mt-2 text-2xl font-semibold text-white">{companyInfo.uei}</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">CAGE Code</p>
          <p className="mt-2 text-2xl font-semibold text-white">{companyInfo.cage}</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">Business Type</p>
          <p className="mt-2 text-2xl font-semibold text-white">Small Business</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-text-muted">SAM.gov Status</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">Active</p>
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

      {/* Founder Section */}
      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold text-white">Leadership</h2>
        <div className="glass rounded-2xl p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-brand to-sky-400 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">NH</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{founderInfo.name}</h3>
                <p className="text-brand">{founderInfo.title}</p>
              </div>
              <div className="space-y-2 text-sm text-text-muted">
                <p><strong className="text-white">Experience:</strong> {founderInfo.experience}</p>
                <p><strong className="text-white">Patents:</strong> {founderInfo.patents}</p>
                <p><strong className="text-white">Citizenship:</strong> {founderInfo.clearance}</p>
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
