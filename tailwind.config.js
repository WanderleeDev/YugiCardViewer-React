/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('@assets/banner.webp')",
        'cardReverse': "url('@images/cardReverse.webp')"
      },
      gridTemplateColumns: {
        'colResponsive': "repeat(auto-fit,minmax(min(20rem, 100%), 1fr))"
      },
      fontFamily: {
        'Poppins': "'Poppins', sans-serif"
      },
      backgroundPosition:{
        'topCenter': "top center"
      },
      keyframes: {
        marquee : {
          '0%' : { transform: 'translateX(0)' },
          '100%' : { transform:'translateX(-100%)' }
        }
      },
      animation: {
        'marquee' : 'marquee 4s linear infinite'        
      }
    },
  },
  plugins: [],
}