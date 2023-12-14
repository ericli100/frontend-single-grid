/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        BigShouldersDisplay: ["Big\\ Shoulders\\ Display", "ui-monospace"], // 'sans-serif' as a fallback
        LexendDeca: ["Lexend\\ Deca", "ui-monospace"],
      },
    },
  },
  plugins: [],
};
