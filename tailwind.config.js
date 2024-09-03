/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "very-dark-blue-text-light": "hsl(200, 15%, 8%)", // Light Mode Text
        "dark-gray": "hsl(0, 0%, 52%)", // Light Mode Input
        "dark-blue": "hsl(209, 23%, 22%)", // Dark Mode Elements
        "very-dark-blue-bg-dark": "hsl(207, 26%, 17%)", // Dark Mode Background
        "very-light-gray-bg-light": "hsl(0, 0%, 98%)", // Light Mode Background
      },
    },
  },
  plugins: [],
};
