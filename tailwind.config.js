/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#363636",
        base: "#3f4042",
        primary: "#c3352e",
        secondary: "#ac362e",
      },
    },
  },
  plugins: [],
};
