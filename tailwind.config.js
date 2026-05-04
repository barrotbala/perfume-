/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fraggo-gold': '#d4af37',
        'fraggo-red': '#8b0000',
        'fraggo-dark': '#0a0a0a',
        'fraggo-card': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
