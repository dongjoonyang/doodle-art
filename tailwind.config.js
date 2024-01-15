/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'art': "url('./assets/images/art-doodle.png')",
      },
    },
  },
  plugins: [],
}

