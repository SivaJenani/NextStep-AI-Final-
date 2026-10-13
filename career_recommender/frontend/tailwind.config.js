/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

const brandOrange = {
  50: "#fff4ec", 100: "#ffe8d9", 200: "#ffd0b0", 300: "#ffb48a", 400: "#ff8a4c",
  500: "#ff6a1a", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407",
};

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: colors.neutral,
        gray: colors.neutral,
        zinc: colors.neutral,
        blue: brandOrange,
        indigo: brandOrange,
        cyan: brandOrange,
        sky: brandOrange,
        teal: brandOrange,
        violet: brandOrange,
        purple: brandOrange,
        ink: "#111111",
        mist: "#f6f6f6",
        tide: "#ea580c",
        coral: "#ff6a1a",
        night: "#111111",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Sora'", "system-ui", "sans-serif"],
        sora: ["'Sora'", "system-ui", "sans-serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(8, 47, 73, 0.18)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top left, rgba(251,146,60,0.35), transparent 32%), radial-gradient(circle at bottom right, rgba(15,118,110,0.28), transparent 30%)",
      },
    },
  },
  plugins: [],
};
