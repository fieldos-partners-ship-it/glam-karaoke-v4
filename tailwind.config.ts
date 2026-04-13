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
        "glass-surface": "#1A2033",
        "neon-teal": "#00D9C4",
        "neon-teal-hover": "#00BFB0",
        "electric-violet": "#7C4DFF",
        "soft-white": "#F2F0F8",
        "cool-mist": "#8B8FA8",
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
