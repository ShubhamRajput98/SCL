/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#102d2b',
        deep: '#0b2221',
        mint: '#d6f36a',
        paper: '#f6f7f2',
        muted: '#65716d',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(16, 45, 43, .10)',
      },
    },
  },
  plugins: [],
}