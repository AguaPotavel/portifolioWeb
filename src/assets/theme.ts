import { DefaultTheme } from "styled-components";

export const Theme = {
  colors: {
    primary: {
      accent: "#e63e5f",
      main: "#e31e45",
      dark: "#c9042c",
    },
    shape: {
      main: "#f2f2f2",
      dark: "#121212",
      accent: "#2e2d2e",
    },
    text: {
      main: "#212529",
      dark: "#f2f2f2",
      accent: "#121212",
    },
  },
  fonts: {
    primary: `'Roboto', sans-serif`,
    secondary: `'Roboto', sans-serif`,
    title: `'Passion One', cursive`,
  },
  sizes: {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
  },
} as DefaultTheme;
