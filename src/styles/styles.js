import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#073642",
  primaryHover: "#094959",
  secondary: "#7D6005",
  menuBarColor: "#55AE51",
  white: "#fff",
  black12: "#1a181e",
  black25: "#353535",
  black30: "#4d4d4d",
  black50: "grey",
  black55: "#989898",
  black60: "#999",
  black70: "#b2b2b2",
  black80: "#ccc",
  black85: "#d9d9d9",
  black90: "#e6e6e6",
  black95: "#f2f2f2",
  black96: "#f5f5f5",
  black98: "#fafafa",
  secondaryGreen: "#17b31b",
  greenHover: "#149917",
  redHover: "#cc0a1d",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
});

export default theme;

// font-family: "GalanoGrotesque";
// font-family-url: url(/fonts/GalanoGrotesque/galanogrotesque-regular.otf);
