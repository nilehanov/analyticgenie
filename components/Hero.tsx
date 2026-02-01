"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { companyInfo } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative container-balanced flex flex-col gap-10 pb-20 pt-10">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-xs text-text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Small Business | UEI: {companyInfo.uei} | CAGE: {companyInfo.cage}
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                AI & Data Analytics
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-sky-400">
                  {" "}for Federal Missions
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-text-muted">
                Analytic Genie delivers artificial intelligence, machine learning, and data analytics 
                solutions for federal agencies. We help government teams turn complex data into 
                mission-critical insights.
              </p>
            </motion.div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
              >
                Contact Us
              </Link>
              <Link
                href="/capabilities"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-muted transition hover:border-white/40 hover:text-white"
              >
                View Capabilities
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface-elevated/60 p-6 text-sm">
              {[
                { label: "Experience", value: "10+ Years" },
                { label: "U.S. Patents", value: "4 Patents" },
                { label: "Focus Areas", value: "AI/ML/Data" }
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-text-muted">{item.label}</p>
                  <p className="text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated/70 p-6 shadow-2xl">
              <div className="mb-4">
                <p className="text-sm text-text-muted">Core Competencies</p>
                <p className="text-xl font-semibold">What We Deliver</p>
              </div>
              <div className="grid gap-3">
                {[
                  { label: "Artificial Intelligence & Machine Learning", highlight: true },
                  { label: "Data Analytics & Engineering", highlight: true },
                  { label: "Cloud & DevSecOps", highlight: true },
                  { label: "Software Development", highlight: false },
                  { label: "Systems Engineering", highlight: false },
                  { label: "Cybersecurity", highlight: false }
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className={`rounded-xl border border-border/70 p-3 backdrop-blur ${
                      item.highlight ? "bg-brand/10" : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${item.highlight ? "bg-brand" : "bg-white/30"}`} />
                      <span className="text-sm text-white">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
