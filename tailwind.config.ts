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
        bg: "#F5F3EE",
        "bg-card": "#FFFFFF",
        "bg-panel": "#EDE9E0",
        "bg-dark": "#1C1C1A",
        primary: "#1C1C1A",
        secondary: "#6B6860",
        tertiary: "#9A9690",
        accent: "#2D5C3F",
        border: "#E0DDD6",
        "border-subtle": "#EDE9E0",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
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
