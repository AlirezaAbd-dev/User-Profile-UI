/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ecf0fc",
        blueAccent: "#120c35",
        button: "#2d2559",
      },
      fontFamily: {
        sans: ["Playfair Display", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};
