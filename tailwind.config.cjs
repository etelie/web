/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#aaa",
          200: "#bbb",
        },
      },
      fontFamily: {
        heading: ["Montserrat"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
