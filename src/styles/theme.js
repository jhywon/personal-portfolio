const colors = {
  white: "#FDFDFD",
  black: "#171717",
  grey: "#333333",
  lightGrey: "#bbbbbb",
  blue: "#1D9696",
  blueLight: "#60c1c1",
  yellowGreen: "#B4EC51",
  red: "#ed421c",
  redLight: "#e87761",
  redLighter: "#ffc2b5",
  redLightest: "#fccec4",
  redDark: "#8C2510",
  orange: "#f4a142"
};

export default {
  dimensions: {
    subSection: {
      margin: "0 auto"
    },
    portfolioHeader: {
      height: "550px"
    },
    navbar: {
      height: "64px",
      margin: "0 auto"
    },
    button: {
      largeHeight: "48px",
      smallHeight: "32px"
    },
    maxWidth: "1060px",
    maxPortfolioImageWidth: "700px"
  },
  colors: {
    primary: colors.red,
    primaryHover: colors.redLight,
    primaryDark: colors.redDark,
    primaryHighlightHover: colors.redLighter,
    primaryHighlight: colors.redLightest,
    primaryGradient: `linear-gradient(to bottom right, ${colors.red}, ${
      colors.orange
    })`,
    text: {
      black: colors.black /* base */,
      white: colors.white
    },
    background: {
      white: colors.white,
      black: colors.black,
      lightGrey: colors.lightGrey,
      grey: colors.grey,
      blue: colors.blue,
      blueGradient: `linear-gradient(to bottom right, ${colors.blue}, ${
        colors.yellowGreen
      })`,
      redGradient: `linear-gradient(to bottom right, ${colors.red}, ${
        colors.orange
      })`
    }
  },
  padding: {
    four: "4px",
    eight: "8px",
    twelve: "12px",
    sixteen: "16px",
    twentyFour: "24px",
    thirtyTwo: "32px",
    fourtyEight: "48px",
    sixtyFour: "64px",
    eighty: "80px",
    hundred: "100px",
    hundredTwenty: "120px"
  },
  flex: {
    spaceBetween: "display: flex; justify-content: space-between",
    spaceAround: "display: flex; justify-content: space-around",
    center: "display: flex; align-items: center; justify-content: center",
    flexStart:
      "display: flex; justify-content: flex-start; align-items: flex-start;",
    flexEnd: "display: flex; justify-content: flex-end"
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }
};
