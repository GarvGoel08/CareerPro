/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-bg': '#282828',
        'hover-text': '#e1bf92',
        'tertiary-bg': '#f19519',
      },
    },
  },
  plugins: [],
}