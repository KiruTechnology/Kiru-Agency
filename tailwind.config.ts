import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: "#0d1b2a",
        "slate-dark": "#0d1b2a",
        "slate-mid": "#1a3050",
        chalk: "#f3efe7",
        amber: {
          DEFAULT: "#e8a020",
          dim: "#c4881a",
        },
        border: "#e2ddd6",
        "border-dark": "#1e3050",
        muted: "#7a7268",
        "muted-lt": "#a09890",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
