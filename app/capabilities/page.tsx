import { CTA } from "@/components/CTA";
import { companyInfo } from "@/lib/constants";

const technicalCapabilities = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript/TypeScript", "SQL", "Java", "R", "Go", "Rust"]
  },
  {
    category: "AI/ML Frameworks",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face", "LangChain", "OpenAI API", "Vertex AI"]
  },
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Airflow", "dbt", "Snowflake", "Databricks", "BigQuery", "Redshift"]
  },
  {
    category: "Cloud Platforms",
    items: ["AWS (Certified)", "Azure (Certified)", "Google Cloud (Certified)", "FedRAMP environments"]
  },
  {
    category: "DevSecOps Tools",
    items: ["Terraform", "Kubernetes", "Docker", "GitHub Actions", "Jenkins", "ArgoCD", "Helm"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Neo4j", "DynamoDB", "SQL Server"]
  },
  {
    category: "Visualization & BI",
    items: ["Tableau", "Power BI", "Looker", "Grafana", "D3.js", "Plotly", "Streamlit"]
  },
  {
    category: "Security & Compliance",
    items: ["NIST frameworks", "FedRAMP", "FISMA", "RMF", "Zero Trust Architecture", "STIG compliance"]
  }
];

export default function CapabilitiesPage() {
  return (
    <div className="container-balanced py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Capabilities</p>
        <h1 className="text-4xl font-semibold text-white">Technical Capabilities</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Deep expertise across the full technology stack—from AI/ML development to cloud infrastructure 
          and secure software engineering.
        </p>
      </div>

      {/* Company Registration */}
      <div className="mb-14 glass rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Company Registration</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-text-muted">Unique Entity ID (UEI)</p>
            <p className="text-xl font-semibold text-white mt-1">{companyInfo.uei}</p>
          </div>
          <div>
            <p className="text-sm text-text-muted">CAGE Code</p>
            <p className="text-xl font-semibold text-white mt-1">{companyInfo.cage}</p>
          </div>
          <div>
            <p className="text-sm text-text-muted">Business Size</p>
            <p className="text-xl font-semibold text-white mt-1">Small Business</p>
          </div>
          <div>
            <p className="text-sm text-text-muted">SAM.gov Status</p>
            <p className="text-xl font-semibold text-emerald-400 mt-1">Active</p>
          </div>
        </div>
      </div>

      {/* NAICS Codes */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-6">NAICS Codes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {companyInfo.naicsCodes.map((naics) => (
            <div key={naics.code} className="glass rounded-xl p-5">
              <p className="text-2xl font-bold text-brand">{naics.code}</p>
              <p className="text-sm text-text-muted mt-1">{naics.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PSC Codes */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-6">Product Service Codes (PSC)</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {companyInfo.pscCodes.map((psc) => (
            <div key={psc.code} className="glass rounded-xl p-5">
              <p className="text-xl font-bold text-brand">{psc.code}</p>
              <p className="text-sm text-text-muted mt-1">{psc.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Capabilities */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-6">Technical Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {technicalCapabilities.map((cap) => (
            <div key={cap.category} className="glass rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-3">{cap.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cap.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-6">Certifications & Compliance</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "AWS Certified Solutions Architect",
            "Azure Certified",
            "GCP Certified",
            "NIST Cybersecurity Framework",
            "FedRAMP Familiarity",
            "Agile/Scrum Methodology"
          ].map((cert) => (
            <div key={cert} className="glass rounded-xl p-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm text-white">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
