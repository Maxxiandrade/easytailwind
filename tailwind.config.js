/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        innerCustom: 'inset 0 1px 8px rgba(0, 0, 0, 0.5)', 
      },
      fontFamily:{
        body: ['Poppins'],
        cursive: ['Parisienne']
      }
    },
  },
  plugins: [],
}
