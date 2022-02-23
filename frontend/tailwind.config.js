// import dd from './src/images/headerImage.svg'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        16: "2rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },

      backgroundImage: {
        "hero-pattern": "url('./images/headerImage.svg')",
        "man-reading-bible": "url('./images/manReadingBible.svg')",
        "man-holding-bible": "url('./images/manHoldingBible.svg')",
        nun: "url('./images/nun.svg')",
        "ancient-picture": "url('./images/ancientPicture.svg')",
      },
      colors: {
        brown: "#A54E2B",
        orange: "#DC9853",
      },
    },
  },
  plugins: [],
};
