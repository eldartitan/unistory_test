/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bebas': ['Bebas Neue', "cursive"],
      "inter": ['Inter', "sans-serif"],
      "avenir": ['Avenir Next Cyr', "sans-serif"],
    },
    extend: {
      colors: {
        'main-orange': '#E75626',
        'second-orange': '#BE3B10',
        'mirage': '#171719',
      },
    },
  },
  plugins: [],
}