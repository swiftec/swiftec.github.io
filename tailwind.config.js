const {join} = require('path');

module.exports = {
  mode: 'jit',
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}')
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  important: '#root',
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
