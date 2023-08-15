/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('@images/banner.webp')",
        'cardReverse': "url('@images/cardReverse.webp')"
      },
      gridTemplateColumns: {
        'colResponsive': "repeat(auto-fit,minmax(min(20rem, 100%), 1fr))"
      }
    },
  },
  plugins: [],
}