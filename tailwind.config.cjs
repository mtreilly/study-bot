/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./src/**/*.html", "./app/**/*.{js,jsx,ts,tsx,svg}", "./app/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
    },
  },
  corePlugins: {
    animation: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
