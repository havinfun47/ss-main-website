import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#141414",
        "bg-card": "#1a1a1a",
        "bg-elevated": "#1f1f1f",
        primary: "#fcfcfa",
        secondary: "#999999",
        tertiary: "#5e5e5e",
        border: "#222222",
        "border-subtle": "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
