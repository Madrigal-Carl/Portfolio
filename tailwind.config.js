/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        play: {
          green: "#01875f",
          greenLight: "#e6f4ea",
          greenDark: "#014d36",
        },
        surface: {
          light: "#ffffff",
          dark: "#1f1f1f",
          card: "#f8f9fa",
          cardDark: "#2d2d2d",
        },
      },
      fontFamily: { google: ["Google Sans", "Roboto", "sans-serif"] },
    },
  },

  plugins: [],
};
