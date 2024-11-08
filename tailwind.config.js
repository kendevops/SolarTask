/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)",
        "secondary-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
      },
      colors: {
        primary: "#F5F7FA",
        secondary: "#232323",
        light: "#E6EFF5",
        accent: " #B1B1B1",
        grey: "#EDF1F7",
        textPrimary: "#343C6A",
        textSecondary: "#718EBF",
        borderPrimary: "#DFEAF2",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        6.5: "1.563rem",
        13: "3.125rem",
      },
    },
  },
  plugins: [],
};
