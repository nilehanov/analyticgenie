import { CTA } from "@/components/CTA";
import { featureCards, useCases, steps } from "@/lib/constants";
import { Brain, BarChart3, Cloud, Code, Lock, Cpu } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container-balanced py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Services</p>
        <h1 className="text-4xl font-semibold text-white">
          Technology Solutions for Government
        </h1>
        <p className="max-w-3xl text-lg text-text-muted">
          We provide end-to-end technology services designed for federal agencies—from AI/ML development 
          to cloud infrastructure and secure software solutions.
        </p>
      </div>

      {/* Core Services */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold text-white">Core Service Areas</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((service) => (
            <div key={service.title} className="glass rounded-2xl p-6">
              <div className="mb-4 inline-flex rounded-full bg-brand/10 p-3 text-brand">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Descriptions */}
      <div className="mb-16 space-y-8">
        <div className="glass rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 rounded-full bg-brand/10 p-4 text-brand">
              <Brain size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-text-muted mb-4">
                We design and deploy production-grade AI/ML solutions that solve real mission problems.
              </p>
              <ul className="grid gap-2 text-sm text-text-muted md:grid-cols-2">
                <li>• Predictive analytics & forecasting</li>
                <li>• Natural language processing (NLP)</li>
                <li>• Computer vision systems</li>
                <li>• Anomaly detection</li>
                <li>• Recommendation engines</li>
                <li>• GenAI & LLM applications</li>
                <li>• MLOps & model management</li>
                <li>• Explainable AI (XAI)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 rounded-full bg-brand/10 p-4 text-brand">
              <BarChart3 size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Data Analytics & Engineering</h3>
              <p className="text-text-muted mb-4">
                Transform raw data into actionable intelligence with robust pipelines and visualization.
              </p>
              <ul className="grid gap-2 text-sm text-text-muted md:grid-cols-2">
                <li>• Data pipeline development (ETL/ELT)</li>
                <li>• Data warehouse design</li>
                <li>• Business intelligence dashboards</li>
                <li>• Real-time analytics</li>
                <li>• Data quality & governance</li>
                <li>• Data lake architecture</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 rounded-full bg-brand/10 p-4 text-brand">
              <Cloud size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud & DevSecOps</h3>
              <p className="text-text-muted mb-4">
                Secure, scalable cloud infrastructure with DevSecOps practices for federal compliance.
              </p>
              <ul className="grid gap-2 text-sm text-text-muted md:grid-cols-2">
                <li>• AWS, Azure, GCP architecture</li>
                <li>• FedRAMP & IL4/IL5 environments</li>
                <li>• CI/CD pipeline development</li>
                <li>• Infrastructure as Code (Terraform)</li>
                <li>• Container orchestration (Kubernetes)</li>
                <li>• Cloud migration services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Target Agencies */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold text-white">Agencies We Serve</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{useCase.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold text-white">Our Approach</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div className="text-brand">
                  <step.icon size={20} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
