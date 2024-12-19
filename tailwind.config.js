/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: '#3cb371',
        backgroundGray: '#E3E3E3',
      }
    },
  },
  plugins: [],
}

