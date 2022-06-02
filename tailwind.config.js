const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-services": {
          "background-image": "url(/bg-services.svg)",
        },
        ".bg-download": {
          "background-image": "url(/img-ornamen.svg)",
        },
      });
    }),
  ],
};
