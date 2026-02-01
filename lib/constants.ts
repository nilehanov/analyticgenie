import { Brain, BarChart3, Sparkles, ShieldCheck, Timer, Workflow, Cloud, Code, Database, Lock, Cpu, LineChart } from "lucide-react";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const featureCards = [
  {
    title: "AI & Machine Learning",
    description: "Custom ML models, predictive analytics, NLP, computer vision, and GenAI solutions for mission-critical applications.",
    icon: Brain
  },
  {
    title: "Data Analytics & Engineering",
    description: "Data pipelines, warehousing, visualization, and business intelligence to transform raw data into actionable insights.",
    icon: BarChart3
  },
  {
    title: "Cloud & DevSecOps",
    description: "Secure cloud architecture on AWS, Azure, and GCP with CI/CD pipelines, containerization, and infrastructure as code.",
    icon: Cloud
  },
  {
    title: "Software Development",
    description: "Full-stack application development using modern frameworks, APIs, microservices, and agile methodologies.",
    icon: Code
  },
  {
    title: "Cybersecurity",
    description: "Security assessments, compliance frameworks, vulnerability management, and secure system design.",
    icon: Lock
  },
  {
    title: "Systems Engineering",
    description: "Requirements analysis, system design, integration, testing, and technical documentation for complex systems.",
    icon: Cpu
  }
];

export const useCases = [
  {
    title: "Federal Agencies",
    body: "AI/ML solutions, data modernization, DevSecOps, and IT system support for civilian and defense agencies."
  },
  {
    title: "State & Local Government",
    body: "Data analytics, application development, and cloud solutions for state agencies and municipalities."
  },
  {
    title: "Prime Contractors",
    body: "Specialized AI/ML and data engineering support as a subcontractor to large defense and IT primes."
  },
  {
    title: "Commercial Enterprise",
    body: "Machine learning systems, data platforms, and cloud infrastructure for enterprise clients."
  }
];

export const companyInfo = {
  name: "Analytic Genie LLC",
  uei: "SJNRUTHBNPY5",
  cage: "185K1",
  naicsCodes: [
    { code: "541511", description: "Custom Computer Programming Services" },
    { code: "541512", description: "Computer Systems Design Services" },
    { code: "541513", description: "Computer Facilities Management Services" },
    { code: "541519", description: "Other Computer Related Services" },
    { code: "518210", description: "Data Processing, Hosting & Related Services" },
    { code: "541715", description: "R&D in Physical, Engineering, and Life Sciences" }
  ],
  pscCodes: [
    { code: "DA01", description: "IT and Telecom - Application Development Support" },
    { code: "DF01", description: "IT and Telecom - IT Management Support Services" },
    { code: "D399", description: "IT and Telecom - Other IT Services" }
  ],
  setAsides: ["Small Business"],
  email: "contact@analyticgenie.com",
  website: "analyticgenie.com"
};

export const founderInfo = {
  title: "Founder & Principal",
  experience: "10+ years in AI/ML and data analytics",
  patents: "4 U.S. Patents in data analytics and predictive modeling",
  education: [
    "M.S. Computer Science (Machine Learning/AI) - UC Irvine",
    "B.S. Computer Engineering - Rensselaer Polytechnic Institute"
  ],
  background: [
    "Department of Defense platforms at Boeing (F-15, F-18, 737, 787 programs)",
    "Production ML systems at CVS Health",
    "Enterprise AI solutions across healthcare and defense sectors"
  ],
  clearance: "U.S. Citizen"
};

export const steps = [
  {
    title: "Requirements Analysis",
    body: "We work closely with your team to understand mission needs, technical requirements, and success criteria.",
    icon: ShieldCheck
  },
  {
    title: "Solution Design",
    body: "Our experts architect scalable, secure solutions leveraging proven technologies and best practices.",
    icon: Sparkles
  },
  {
    title: "Agile Delivery",
    body: "Iterative development with continuous feedback ensures solutions meet evolving requirements.",
    icon: Timer
  }
];

export const differentiators = [
  {
    title: "Deep Technical Expertise",
    description: "4 U.S. Patents in data analytics. 10+ years building production AI/ML systems for defense and healthcare."
  },
  {
    title: "Mission-First Approach",
    description: "We understand government and enterprise operations. Our solutions are designed for security, compliance, and mission success."
  },
  {
    title: "Small Business Agility",
    description: "Direct access to senior technical leadership. Rapid response. No layers of bureaucracy."
  },
  {
    title: "Proven Track Record",
    description: "Experience supporting DoD programs at Boeing with documented success in complex system development."
  }
];

export const blogPosts = [
  {
    title: "AI/ML Best Practices for Government",
    tag: "AI Strategy",
    description: "Implementing explainable, auditable AI systems that meet federal compliance requirements.",
    href: "#"
  },
  {
    title: "DevSecOps for Federal Agencies",
    tag: "Cloud",
    description: "Building secure CI/CD pipelines and achieving ATO in cloud environments.",
    href: "#"
  },
  {
    title: "Data Modernization Roadmap",
    tag: "Data",
    description: "Strategies for migrating legacy systems to modern cloud-native architectures.",
    href: "#"
  }
];
