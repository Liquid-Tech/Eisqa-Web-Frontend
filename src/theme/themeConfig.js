import { createTheme } from "@mui/material/styles";

const primaryColor = "#2f4983";
const tableHeadColor = "#9debd6";
const green = "#1ebf73";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    green: {
      main: green,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobilesm: 320,
      mobilelg: 425,
      tablet: 768,
      laptop: 1024,
      laptoplg: 1440,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "white",
        },
        text: {
          textTransform: "none",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: tableHeadColor,
        },
      },
    },
  },
});

export const snackBarPlacement = { horizontal: "right", vertical: "top" };

export const projectName = "Eisqa";
