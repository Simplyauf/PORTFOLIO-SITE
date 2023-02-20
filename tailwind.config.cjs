/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f56a6a",
        neutralColor: "#7f888f",
      },
      fontFamily: {
        Poppins: ["Poppins", "san- serif"],
      },
    },
  },
  plugins: [],
};
