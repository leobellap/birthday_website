/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: '"Comfortaa", sans-serif',
        libre_franklin: '"Libre Franklin", sans-serif',
      },
    },
  },
  plugins: [],
};
