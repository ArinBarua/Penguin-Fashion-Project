/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            'bebas-neue-regular': ["Bebas Neue", 'serif'],
            'roboto-sec': ["Roboto", 'serif'],
        },
        extend: {
            'title-black': '#363958','light-black': '#3E3E3E',
        },
    },

    plugins: [],
  }