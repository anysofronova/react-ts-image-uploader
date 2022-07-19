/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "460px",
    },
    extend: {
      colors: {
        bgWhite: "#FAFAFB",
        title: "#4F4F4F",
        subTitle: "#828282",
        dropZone: "#F6F8FB",
        dropZoneText: "#BDBDBD",
        border: "#E0E0E0",
        button: "#2f80ed",
      },
      keyframes: {
        loading: {
          "0%": { left: "0" },
          "50%": { left: "calc(100% - 5.75rem)" },
          "100%": { left: "0" },
        },
      },
      animation: {
        loading: "loading 2s linear infinite",
      },
    },
  },
  plugins: [],
};
