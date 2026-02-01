import Image from "next/image";
import Link from "next/link";
import { navLinks, companyInfo } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-elevated/60 py-10">
      <div className="container-balanced">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Logo and Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-surface-elevated">
                <Image
                  src="/images/logo.png"
                  alt="Analytic Genie logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Analytic Genie</p>
              </div>
            </div>
            <p className="text-sm text-text-muted mb-4">
              AI, Machine Learning, and Data Analytics solutions for federal government agencies.
            </p>
            <div className="text-xs text-text-muted space-y-1">
              <p>UEI: {companyInfo.uei}</p>
              <p>CAGE: {companyInfo.cage}</p>
              <p>Small Business</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-sm font-semibold text-white mb-3">Company</p>
              <div className="flex flex-col gap-2 text-sm text-text-muted">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white mb-3">Contact</p>
              <div className="flex flex-col gap-2 text-sm text-text-muted">
                <a href={`mailto:${companyInfo.email}`} className="transition hover:text-white">
                  {companyInfo.email}
                </a>
                <a href={`https://${companyInfo.website}`} className="transition hover:text-white">
                  {companyInfo.website}
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white mb-3">Quick Links</p>
              <div className="flex flex-col gap-2 text-sm text-text-muted">
                <a 
                  href="https://sam.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  SAM.gov
                </a>
                <Link href="/capabilities" className="transition hover:text-white">
                  NAICS Codes
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Analytic Genie LLC. All rights reserved.</p>
          <p>Registered in SAM.gov • Small Business</p>
        </div>
      </div>
    </footer>
  );
}
