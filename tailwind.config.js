/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#043873',
        'primary-blue': '#4F9CF9',
        'secondary-yellow': '#FFE492',
        'text-dark': '#212529',
        'text-light': '#FFFFFF',
        'accent-teal': '#A7CEFC',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


