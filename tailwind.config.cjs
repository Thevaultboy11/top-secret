const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F4F4',
        ["ibm-white"]: '#e0e0e0',
        primary: 'var(--aw-color-primary)',
        secondary: '#A223DB',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
      },
      textColor: {
        default: '#525252', // Change the default text color
        primary: 'rgb(90 54 255)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            'p': {
              fontFamily: ['Inter', ...defaultTheme.fontFamily.sans],
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
