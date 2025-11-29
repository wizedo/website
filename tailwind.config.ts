import type { Config } from "tailwindcss";

const heroColor = "#591ECE";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heroColor,
        greenColor: "#6c00f8ff",
        eventBgColor: "#1C1C1C",
      },
      backgroundImage: {
        heroGradient: `radial-gradient(circle at center, ${heroColor} 0%, #000000 60%, #000000 100%)`,
      },
      fontFamily: {
        helveticaNeue: ['Helvetica Neue', 'sans-serif'],
        bodoniseventytwo: ['bodoniseventytwo', 'sans-serif'],
        humaneMedium: ['humaneMedium', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
