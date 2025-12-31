import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="container-balanced py-16">
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Proof</p>
        <h2 className="text-3xl font-semibold text-white">Trusted by ambitious teams</h2>
        <p className="max-w-2xl text-text-muted">
          Outcomes, not vanity metrics. Customers rely on Analytic Genie for decisions that move the
          needle.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.35 }}
            className="glass flex h-full flex-col rounded-2xl p-6"
          >
            <p className="text-sm leading-relaxed text-text-muted">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-auto pt-6">
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs text-text-muted">{item.title}</p>
            </div>
            <div className="mt-4 inline-flex w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              {item.metric}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

