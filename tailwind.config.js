/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(180, 244, 97)",
      },
      fontFamily: {
        lexend: "Lexend", // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
};
