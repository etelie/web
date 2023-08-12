import type { Config as TailwindConfig } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./*.html, ./src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  prefix: 't-',
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#ffffff',
      },
      spacing: {
        68: '17rem',
        112: '28rem',
        128: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '112rem',
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '112rem',
      },
      backdropBlur: {
        '3xs': '1px',
        '2xs': '1.5px',
        xs: '2px',
      },
    },
  },
} satisfies TailwindConfig;
