/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: ["Poppins", "sans-serif"],
        testmonialfont: ["Poetsen One", "sans-serif"],
        certificateOne: ["Satisfy", "cursive"],
        certificateTwo: ["Edu TAS Beginner", "cursive"],
        certificateThree: ["Cormorant Garamond", "serif"],

      }
    },
  },
  plugins: [],
}

