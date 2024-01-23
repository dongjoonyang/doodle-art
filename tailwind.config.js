/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'art': "url('./assets/images/visual_bg.png')",
      },
      fontFamily:{
        'NanumSquareNeo':['NanumSquareNeo'],
        'NanumPen':['NanumPen'],
      },
    },
  },
  plugins: [],
}

