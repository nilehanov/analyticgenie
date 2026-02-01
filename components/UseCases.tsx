"use client";

import { motion } from "framer-motion";
import { useCases } from "@/lib/constants";

export function UseCases() {
  return (
    <section className="container-balanced py-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Who We Serve</p>
        <h2 className="text-3xl font-semibold text-white">Federal Agencies & DoD</h2>
        <p className="max-w-2xl text-text-muted">
          We understand the unique requirements of government operations—security, compliance, 
          and mission-critical reliability. Our solutions are designed for federal environments.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((useCase, idx) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">{useCase.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
