/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-slate-500',
    'bg-gray-500',
    'bg-zinc-500',
    'bg-neutral-500',
    'bg-stone-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-rose-500',
  ],
  theme: {
    extend: {
      boxShadow: {
        innerCustom: 'inset 0 1px 8px rgba(0, 0, 0, 0.5)', 
      },
      fontFamily:{
        body: ['Poppins'],
        cursive: ['Parisienne'],
        ubuntu: ['Ubuntu'],
        kanit: ['Kanit']
      }
    },
  },
  plugins: [],
}
