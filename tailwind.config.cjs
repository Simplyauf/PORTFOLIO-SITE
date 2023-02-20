/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f56a6a",
        secondaryColor: "hsl(0,0%,96%)",
        darkSecondaryColor: "hsl(0,0%,74%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "san- serif"],
      },
    },
  },
  plugins: [],
};
