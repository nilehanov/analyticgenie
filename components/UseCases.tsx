import { motion } from "framer-motion";
import { useCases } from "@/lib/constants";

export function UseCases() {
  return (
    <section className="container-balanced py-16">
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Use cases</p>
        <h2 className="text-3xl font-semibold text-white">Built for every team</h2>
        <p className="max-w-2xl text-text-muted">
          Analytic Genie adapts to your operating model — from early-stage focus to enterprise scale.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.35 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Focus</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

