/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    nightwind: {
      typography: true,
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/bg-color.jpg')",
        'footer-texture': "url('/src/images/light.png')",
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      colors: {
        'orang': '#F26C4F',
      }
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    [require("nightwind")],
  ],
}
