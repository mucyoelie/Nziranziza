/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#003366',
        grayCustom: '#B0B0B0',
        customBlue: '#91D7E3',  // Define the custom color
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway as a custom font
        'merriweather-sans': ['"Merriweather Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}