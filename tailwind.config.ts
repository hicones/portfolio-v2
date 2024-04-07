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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "gradient-primary": "hsl(var(--gradient-primary))",
        "gradient-secondary": "hsl(var(--gradient-secondary))",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
      fontFamily: {
        title: ["var(--font-title)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate")],
};
export default config;
