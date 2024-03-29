import { Platform } from "react-native-web";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textWhite: "white",
    textSecondary: "#586069",
    appBarBackground: "#24292e",
    appBarText: "#FFFFFF",
    primary: "#0366d6",
    mainBackground: "#e1e4e8",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial ",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
