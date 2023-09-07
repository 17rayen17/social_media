/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: "1rem",
      },
      colors:{
        darkbg:{
          default:"#20222f",
          card:'hsl(228, 28%, 20%)',
          dark:"hsl(230, 17%, 14%)",
        },
      },
    },
  },
  plugins: [],
}

