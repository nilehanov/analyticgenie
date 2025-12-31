import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { logos } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative container-balanced flex flex-col gap-10 pb-20 pt-10">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-xs text-text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Shipping AI that teams actually trust
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
                Turn data into decisions
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-sky-400">
                  {" "}
                  instantly.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-text-muted">
                Analytic Genie is the AI decision layer for modern teams — explainable insights,
                real-time analytics, and automations that close the loop.
              </p>
            </motion.div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-gradient-to-r from-brand to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                Request a demo
              </Link>
              <Link
                href="/product"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-muted transition hover:border-white/40 hover:text-white"
              >
                See how it works
              </Link>
              <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                SOC2-ready · Explainable by design
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface-elevated/60 p-6 text-sm">
              {[
                { label: "Time-to-insight", value: "10x faster" },
                { label: "Signal quality", value: "Precision 94%" },
                { label: "Coverage", value: "50+ connectors" }
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
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-muted">Live business pulse</p>
                  <p className="text-xl font-semibold">Control tower</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Realtime
                </span>
              </div>
              <div className="grid gap-4">
                {["Growth", "Reliability", "Engagement"].map((label, idx) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border/70 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="mb-2 flex items-center justify-between text-sm text-text-muted">
                      <span>{label}</span>
                      <span>Signal strength</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 flex-1 rounded-full bg-white/10">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-brand to-sky-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${70 + idx * 8}%` }}
                          transition={{ delay: 0.2 * idx, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs text-text-muted">{70 + idx * 8}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-text-muted/80">
          Trusted by teams shipping the future
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-white/80">
            {logos.map((logo) => (
              <span key={logo} className="rounded-full border border-border/80 px-3 py-1">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

