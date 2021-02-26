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
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
