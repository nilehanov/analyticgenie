import { companyInfo, founderInfo } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="container-balanced py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Contact</p>
        <h1 className="text-4xl font-semibold text-white">Get in Touch</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Interested in working with us? We would love to hear about your mission requirements 
          and discuss how Analytic Genie can help.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-text-muted">Primary Contact</p>
              <p className="text-xl font-semibold text-white mt-1">{founderInfo.name}</p>
              <p className="text-brand">{founderInfo.title}</p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Email</p>
              <a 
                href={`mailto:${companyInfo.email}`}
                className="text-xl font-semibold text-white mt-1 hover:text-brand transition"
              >
                {companyInfo.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-text-muted">Website</p>
              <a 
                href={`https://${companyInfo.website}`}
                className="text-xl font-semibold text-white mt-1 hover:text-brand transition"
              >
                {companyInfo.website}
              </a>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-text-muted mb-3">Company Registration</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-text-muted">UEI</p>
                  <p className="font-semibold text-white">{companyInfo.uei}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">CAGE Code</p>
                  <p className="font-semibold text-white">{companyInfo.cage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">For Contracting Officers</h3>
            <p className="text-sm text-text-muted mb-4">
              Analytic Genie LLC is registered in SAM.gov and ready to support your mission. 
              We welcome the opportunity to respond to RFIs, Sources Sought notices, and solicitations.
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="text-text-muted">UEI:</span> <span className="text-white font-mono">{companyInfo.uei}</span></p>
              <p><span className="text-text-muted">CAGE:</span> <span className="text-white font-mono">{companyInfo.cage}</span></p>
              <p><span className="text-text-muted">Size:</span> <span className="text-white">Small Business</span></p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Capability Statement</h3>
            <p className="text-sm text-text-muted mb-4">
              Request our detailed capability statement for your procurement files.
            </p>
            <a 
              href={`mailto:${companyInfo.email}?subject=Capability Statement Request`}
              className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
            >
              Request Capability Statement
            </a>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Primary NAICS Codes</h3>
            <div className="space-y-2">
              {companyInfo.naicsCodes.slice(0, 4).map((naics) => (
                <div key={naics.code} className="flex items-center gap-3">
                  <span className="text-brand font-mono font-semibold">{naics.code}</span>
                  <span className="text-xs text-text-muted">{naics.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
