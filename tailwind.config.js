/** @type {import('tailwindcss').Config} */



module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'sm': '340px',
      'md': "788px",
      'lg': "1024px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
