import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#434B4D",
  primaryLight: "#F5F5F5",
  primaryDark: "#9FAAAB",
  secondary: "#70B0F2",
  secondaryLight: "#D0E6FD",
  secondaryDark: "#4C99E9",
  contrastText: "#fff",
  success: "#004d40",
  info: "#00a2ff",
  danger: "#FFB72F",
  warning: "#FFD92F",
  error: "#d32f2f",
  dark: "#0c1012",
  ligth: "#aaa",
  muted: "#646369",
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
  black: "#000",
};

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
      contrastText: Colors.primary,
    },
  },
  typography: {
    typoEllipsis: {
      fontSize: "0.875rem",
      letterSpacing: "0.01071em",
      fontWeight: 400,
      lineHeight: 1.43,
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: `1px solid ${Colors.primaryDark}`,
          borderRadius: "8px",
          padding: "8px",
          transition: "0.2s all ease-in-out",
          "&.Mui-error": {
            borderColor: Colors.error,
            boxShadow: "0 0 0 0.2rem rgba(211, 47, 47, 0.25)",
          },
          "&:focus-within": {
            borderColor: Colors.secondary,
            boxShadow: "0 0 0 0.2rem rgba(112, 176, 242, 0.25)",
          },
          "& .MuiInputBase-input": {
            color: Colors.primary,
            "&::placeholder": {
              color: Colors.primary,
            }
          }
        },
      },
    },
  },
});

export default theme;
