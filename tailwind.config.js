/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(180, 244, 97)",
        secondary: "rgb(249, 247, 243)",
        "dark-primary": "rgb(17, 17, 17)",
        "dark-secondary": "rgba(17, 17, 17, 0.7)",
        "dark-primary": "rgb(17, 17, 17)",
        "dark-secondary": "rgba(17, 17, 17, 0.7)",
      },
      fontFamily: {
        lexend: "Lexend", // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
};
