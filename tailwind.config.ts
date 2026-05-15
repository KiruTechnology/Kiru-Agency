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
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        syne: ["Syne", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
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
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(22px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-18px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          from: {
            opacity: "0",
            transform: "translateX(18px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        btnBounce: {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(0.92)" },
          "60%": { transform: "scale(1.06)" },
          "80%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in",
        slideUp: "slideUp 0.55s ease forwards",
        slideInLeft: "slideInLeft 0.5s ease forwards",
        slideInRight: "slideInRight 0.5s ease forwards",
        btnBounce: "btnBounce 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97)",
      },
    },
  },
  plugins: [],
} satisfies Config;
