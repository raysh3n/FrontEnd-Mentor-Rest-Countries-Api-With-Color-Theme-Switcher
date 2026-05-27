/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",//"selector",
  theme: {
    // screens: {
    //   sm: '375px',
    //   lg:'1440px',
    // },
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"'],
      },
      
    },
  },
  plugins: [],
}
