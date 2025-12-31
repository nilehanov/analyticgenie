import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          muted: "var(--color-brand-muted)"
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)"
        },
        border: "var(--color-border)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)"
        }
      },
      boxShadow: {
        glow: "0 10px 60px rgba(99, 102, 241, 0.25)"
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "radial-glow":
          "radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(56, 189, 248, 0.18), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;

