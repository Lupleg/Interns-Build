/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".overflow-clip-margin": {
          overflowClipMargin: "content-box",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
