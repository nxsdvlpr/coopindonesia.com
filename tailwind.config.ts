// tailwind.config.js
const { withTV } = require('tailwind-variants/transformer')

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  plugins: [require('@tailwindcss/typography')],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-figtree)'],
        mono: ['var(--font-mulish)'],
      },
      colors: {
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        primary: {
          25: '#FFF3EB',
          50: '#FFE8D7',
          100: '#FEDCC3',
          200: '#FCC49B',
          300: '#FAB887',
          400: '#F39240',
          500: '#F08519',
          600: '#D17314',
          700: '#B26110',
          800: '#784007',
          900: '#5D3004',
        },
      },
    },
  },
})
