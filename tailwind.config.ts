/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F7AD3',  // New official blue color
          hover: '#2362B0',    // Darker shade for hover states
          light: '#EBF2FB',    // Light shade for backgrounds
        },
        secondary: '#FF4B91',
        gray: {
          100: '#F4F6FB',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#666666',
          700: '#404040',
          800: '#262626',
          900: '#1A1A1A',
        },
        status: {
          success: '#00B34D',
          warning: '#FFCD43',
          error: '#FF4843',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        ara: ['var(--font-ara-al-bayan)'],
        albayan: ['var(--font-al-bayan)'],
      },
    },
  },
  plugins: [],
};