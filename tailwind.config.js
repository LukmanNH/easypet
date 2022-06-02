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
        ".bg-footer": {
          background:
            "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
        },
      });
    }),
  ],
};
