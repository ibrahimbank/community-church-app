// import dd from './src/images/headerImage.svg'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      "1xl": "1279",
    },
    extend: {
      spacing: {
        16: "2rem",
        15: "3.75rem",
        128: "32rem",
        144: "39rem",
        150: "48rem",
        201: "91rem",
      },

      backgroundImage: {
        "hero-pattern": "url('./images/headerImage.svg')",
        "man-reading-bible": "url('./images/manReadingBible.svg')",
        "man-holding-bible": "url('./images/manHoldingBible.svg')",
        nun: "url('./images/nun.svg')",
        "ancient-picture": "url('./images/ancientPicture.svg')",
        "about-header": "url('./images/aboutHeader.png')",
        "contact-header": "url('./images/contactImage.png')",
      },
      colors: {
        brown: "#A54E2B",
        orange: "#DC9853",
      },
    },
  },
  plugins: [],
};
