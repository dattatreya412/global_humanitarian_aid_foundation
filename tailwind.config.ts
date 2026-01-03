import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      colors: {
        customWhite: "#F9F7F7",
        customGrey: "#DBE2EF",
        customBlue: "#3F72AF",
        customDarkBlue: "#112D4E",
      },
    },
  },
  plugins: [],
};

export default config;
