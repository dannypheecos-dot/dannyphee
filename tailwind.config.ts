import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#141414",
        paper: "#f4f1ea",
        gold: {
          DEFAULT: "#c5a059",
          soft: "#d4b36e",
        },
        mute: "#9a958a",
      },
      maxWidth: {
        site: "72rem",
        measure: "40rem",
      },
      letterSpacing: {
        brand: "0.22em",
        nav: "0.16em",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
