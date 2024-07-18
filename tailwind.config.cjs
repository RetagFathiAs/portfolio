/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#06001b",
        secondary: "#9fc5e8",
        tertiary: "#4c8cc7",
        "black-100": "#0b5394",
        "black-200": "#004081",
        "white-100": "#cfe2f3",
      },
      boxShadow: {
        card: "0px 3px 30px 2px #1161aa",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
