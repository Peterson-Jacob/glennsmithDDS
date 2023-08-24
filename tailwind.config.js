/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {

      fontFamily: {
        'Cederville':[' "Cedarville Cursive", cursive;']
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },

      colors:{
        'blue': '#004c6e',
        
      }
      
    },
  },
  plugins: [],

  
  
}

