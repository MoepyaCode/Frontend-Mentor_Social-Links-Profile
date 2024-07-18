/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),

    }),
    extend: {
      colors: {
        'neon-green': '#C4F82A',
        primaryBg: '#141414',
        secondaryBg: '#1F1F1F',
        primaryGray: '#333333',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}