import { motion } from "framer-motion";
import React from "react";

const circles = [
  { size: 420, x: "10%", y: "5%", color: "rgba(108,92,231,0.18)" },
  { size: 360, x: "70%", y: "10%", color: "rgba(56,189,248,0.16)" },
  { size: 520, x: "40%", y: "60%", color: "rgba(16,185,129,0.1)" }
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {circles.map((circle, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full blur-3xl"
          style={{
            width: circle.size,
            height: circle.size,
            background: circle.color,
            top: circle.y,
            left: circle.x
          }}
          animate={{
            scale: [1, 1.05, 1],
            x: [0, 10, -10, 0],
            y: [0, -8, 8, 0]
          }}
          transition={{
            duration: 14 + idx * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
    </div>
  );
}

