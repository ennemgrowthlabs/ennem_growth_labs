import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070A",
        ember: "#E23C14",
        blaze: "#FF3B00",
        cyan: "#22D3EE",
        lime: "#A3E635",
        mag: "#E879F9",
      },
      fontFamily: {
        display: ["Orbitron", "Eurostile", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Outfit", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(226, 60, 20, 0.35)",
        cyan: "0 0 32px rgba(34, 211, 238, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
