import { Brain, BarChart3, Sparkles, ShieldCheck, Timer, Workflow } from "lucide-react";

export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export const featureCards = [
  {
    title: "AI-powered insights",
    description: "Understand patterns, anomalies, and drivers with explainable AI tuned for decisions.",
    icon: Brain
  },
  {
    title: "Real-time analytics",
    description: "Stream metrics from your stack and surface what matters in milliseconds.",
    icon: BarChart3
  },
  {
    title: "Decision automation",
    description: "Close the loop with playbooks that trigger actions when thresholds or trends emerge.",
    icon: Workflow
  }
];

export const useCases = [
  {
    title: "Founders",
    body: "Board-ready dashboards, growth levers, and crisp summaries for every investor update."
  },
  {
    title: "Product teams",
    body: "Ship smarter with feature impact analysis, user journeys, and release health signals."
  },
  {
    title: "Data teams",
    body: "Automate monitoring, enforce data contracts, and deploy insights without new pipelines."
  },
  {
    title: "Enterprises",
    body: "Governance-ready, SOC2-aligned controls with auditability and privacy by design."
  }
];

export const testimonials = [
  {
    name: "Elena Park",
    title: "VP Product, Northstar",
    quote:
      "Analytic Genie became our operating system for decisions. We ship faster because the signals are already there.",
    metric: "+28% feature adoption"
  },
  {
    name: "Rahul Mehta",
    title: "Head of Data, Lattice Labs",
    quote:
      "The explainability layer is unmatched. Execs trust the AI because every recommendation shows its rationale.",
    metric: "-35% time-to-insight"
  },
  {
    name: "Maya Chen",
    title: "COO, Nova Bank",
    quote:
      "Compliance loved it. We went from manual reporting to automated, auditable decision flows in weeks.",
    metric: "99.9% uptime"
  }
];

export const steps = [
  {
    title: "Connect data",
    body: "Secure connectors for warehouses, product analytics, CRMs, and event streams.",
    icon: ShieldCheck
  },
  {
    title: "Genie analyzes",
    body: "Adaptive AI agents map your business model, detect patterns, and benchmark performance.",
    icon: Sparkles
  },
  {
    title: "Insights delivered",
    body: "Concise briefs, alerts, and automations delivered where teams already work.",
    icon: Timer
  }
];

export const pricing = [
  {
    name: "Starter",
    price: "$39",
    cadence: "per seat / mo",
    features: [
      "Up to 5 workspaces",
      "Core dashboards",
      "Slack + email alerts",
      "Basic connectors"
    ]
  },
  {
    name: "Growth",
    price: "$89",
    cadence: "per seat / mo",
    features: [
      "Unlimited workspaces",
      "Automations & playbooks",
      "Advanced roles & SSO",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    cadence: "custom",
    features: [
      "Dedicated VPC or on-prem",
      "Custom SLAs & DPA",
      "Fine-grained governance",
      "White-glove onboarding"
    ]
  }
];

export const logos = ["Aurora Labs", "SignalWave", "Northstar", "Lattice", "Nova Bank", "Cinder"];

export const blogPosts = [
  {
    title: "Designing AI for high-stakes decisions",
    tag: "AI Strategy",
    description: "A framework for explainability, guardrails, and human-in-the-loop controls.",
    href: "#"
  },
  {
    title: "From dashboards to decisions",
    tag: "Product",
    description: "Why actionability beats vanity metrics — and how to measure what matters.",
    href: "#"
  },
  {
    title: "Building trust with enterprise data teams",
    tag: "Security",
    description: "Our approach to privacy, governance, and alignment with SOC2 controls.",
    href: "#"
  }
];

