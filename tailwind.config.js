/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#D20653",
        secondary : "#ff9320",
        "secondary-low" : "#fff5e9"
      },
    },
    fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
  },
  plugins: [],
  prefix: "tw-",
};
