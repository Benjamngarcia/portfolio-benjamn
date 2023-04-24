import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#576F72",
  primaryLight: "#284043",
  primaryDark: "#9FAAAB",
  secondary: "#70B0F2",
  secondaryLight: "#D0E6FD",
  secondaryDark: "#4C99E9",
  contrastText: '#fff',
  success: "#004d40",
  info: "#00a2ff",
  danger: "#FFB72F",
  warning: "#FFD92F",
  dark: "#0c1012",
  ligth: "#aaa",
  muted: "#646369",
  // border: "#DDDFE1",
  // inverse: "#2F3D4A",
  // shaft: "#333",
  /////////////////
  // grays
  /////////////////
  gray: "#6c6b6e",
  grayLight: "#5a5a5c",
  grayDark: "#5a5a5c",
  /////////////////
  // solid color
  /////////////////
  white: "#fff",
  black: "#000"
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
      contrastText: Colors.contrastText,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondaryLight,
      dark: Colors.secondaryDark,
      contrastText: Colors.contrastText,
    },
    neutral: {
      main: Colors.primary,
      light: Colors.grayLight,
      dark: Colors.grayDark,
      contrastText: Colors.primary
    }
  },
});

export default theme;