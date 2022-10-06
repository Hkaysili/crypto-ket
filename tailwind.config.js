/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    extend: {
      backgroundColor:  {
        'dark' : '#24252D', 
        'light' : '#FFFFFF', 
        'red-violet' : '#DA18A3',
        'card' : '#2A2D3A', 
      },
      fontFamily: {
        'gotham':['Raleway', 'sans-serif'],
        'poppins':['poppins', 'sans-serif']
      },
      colors: {
        'dark' : '',
        'light': '#FFFFFF',
        'gray' : '#4F4F4F',
        'red-violet' : '#DA18A3'
      },
      borderColor: {
        'black' : '#2D2E36'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [], 
}
