/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./layouts/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        pixels: ["Tiny5", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        sorint: "#938398",
      },
    },
  },
  plugins: [],
};
