"use client";

import { motion } from "framer-motion";
import { featureCards } from "@/lib/constants";

export function Features() {
  return (
    <section className="container-balanced py-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Capabilities</p>
        <h2 className="text-3xl font-semibold text-white">Engineered for decisions</h2>
        <p className="max-w-2xl text-text-muted">
          Capture every signal, surface what matters, and automate next steps with governance built
          in.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featureCards.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="glass relative overflow-hidden rounded-2xl p-6"
          >
            <div className="mb-4 inline-flex rounded-full bg-white/5 px-3 py-2 text-brand">
              <feature.icon size={18} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
            <div className="absolute inset-0 opacity-0 transition hover:opacity-100">
              <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

