import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // https://realtimecolors.com/?colors=f2edfd-0a0416-5416d0-1c024f-c61ce8
        text: {
          light: '#f2edfd',
          dark: '#0a0416',
        },
        background: {
          light: '#f2edfd',
          dark: '#0a0416',
        },
        primary: '#5416d0',
        secondary: '#1c024f',
        accent: '#c61ce8',
      },
    },
  },
  plugins: [],
};
export default config;
