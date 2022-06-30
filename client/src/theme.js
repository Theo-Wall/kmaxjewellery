import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#425463",
    },
    secondary: {
      main: "#AC1F2D",
    },
  },
  typography: {
    fontFamily: "Fira Sans",
    fontWeightRegular: 600,
  },
});

export default theme;
