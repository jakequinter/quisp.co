const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
      chakra50: '#F7FAFC',
      chakra100: '#EDF2F7',
      chakra200: '#E2E8F0',
      chakra300: '#CBD5E0',
      chakra400: '#A0AEC0',
      chakra500: '#718096',
      chakra600: '#4A5568',
      chakra700: '#2D3748',
      chakra800: '#1A202C',
      chakra900: '#171923'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
