module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
          A700_99: "#ffffff99",
          A700_26: "#ffffff26",
          A700_3f: "#ffffff3f",
          A700_7f: "#ffffff7f",
          A700_01: "#ffffff",
        },
        cyan: { 600: "#00b0b5" },
        indigo: { 900: "#1c4075", "900_1e": "#1c40751e", "900_26": "#1c407526" },
        gray: { 100: "#f6f7f9" },
        blue_gray: { 900: "#153058" },
        orange: { A100: "#f5cf8c" },
        red: { 300: "#cc6373" },
        black: { 600: "#656d76", A700_01: "#000000" },
      },
      boxShadow: { xs: "0px 0px 13px 5px #00000029" },
      fontFamily: {
        gilroymedium: "Gilroy-Medium",
        gilroy: "Gilroy",
        gilroysemibold: "Gilroy-SemiBold",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
