/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../portfolio/src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../adrien-olichon-RCAhiGJsUUE-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}

