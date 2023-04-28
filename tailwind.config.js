/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: 'class',
  prefix: "tw-",
  plugins: [],
  theme: {
    // fontFamily: ({ theme }) => ({
    //   // sans: "Montserrat, " + theme.fontSize,
    // }),
    extend: {
      colors: {
        grayscale: {
          0: "#ffffff",
          100: "#f7faf8",
          1000: "#000000",
        },
      },
    },
  },
};
