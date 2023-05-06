/** @type {import('tailwindcss').Config} */
export default {
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

