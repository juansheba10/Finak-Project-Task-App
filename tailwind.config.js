/** @type {import('tailwindcss').Config} */



module.exports = {
  darkMode: 'class',
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'sm': '340px',
      'md': "588px",
      'lg': "1024px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
