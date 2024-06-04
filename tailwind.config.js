/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^text-/},
    { pattern: /^bg-/},
    { pattern: /^border-/},
    { pattern: /^w-/},
    { pattern: /^h-/},
    { pattern: /^hover:/},
    
    { pattern: /^rounded-/}
   ],
  theme: {
    extend: {
      boxShadow: {
        innerCustom: 'inset 0 1px 8px rgba(0, 0, 0, 0.5)', 
      },
      fontFamily: {
        body: ['Poppins'],
        cursive: ['Parisienne'],
        ubuntu: ['Ubuntu'],
        kanit: ['Kanit']
      }
    },
  },
  plugins: [],
}
