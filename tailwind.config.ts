import type { Config } from "tailwindcss";

// GC-8: Color and font tokens used by CTAButton variants and all components
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "stage-noir": "#0E1117",
        "logo-noir": "#111111",
        "glass-surface": "#181218",
        "neon-teal": "#E51997",
        "neon-teal-hover": "#FF4AB8",
        "electric-violet": "#B31269",
        "soft-white": "#F2F0F8",
        "cool-mist": "#A793A7",
      },
      fontFamily: {
        clash: ["var(--font-clash)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
