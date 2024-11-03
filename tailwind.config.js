/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'belcorp-blue': '#0057B8',
        'belcorp-gray': '#4D4D4D',
      },
    },
  },
  plugins: [],
}
