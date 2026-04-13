// GC-9: Tailwind v3 PostCSS config — uses tailwindcss: {} NOT @tailwindcss/postcss (v4 only)
// AP-024: autoprefixer included for cross-browser CSS vendor prefixing
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
