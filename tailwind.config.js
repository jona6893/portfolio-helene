const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      raleway: 'Raleway, sans-serif'
    },
    fontSize: {
      size_sm: "clamp(0.8rem, 0.09vw + 0.78rem, 0.85rem)",
      size_base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
      size_md: "clamp(1.25rem, 0.75vw + 1.06rem, 1.66rem)",
      size_lg: "clamp(1.56rem, 1.39vw + 1.21rem, 2.33rem)",
      size_xl: "clamp(1.95rem, 2.37vw + 1.36rem, 3.26rem)",
      size_xxl: "clamp(2.44rem, 3.86vw + 1.48rem, 4.56rem)",
      size_xxxl: "clamp(3.05rem, 6.06vw + 1.54rem, 6.39rem)",
    },
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors,
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
