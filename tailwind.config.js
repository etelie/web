import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: 'class',
  prefix: "tw-",
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
        serif: fontFamily.serif,
        mono: fontFamily.mono,
      },
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
