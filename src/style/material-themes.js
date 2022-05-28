import { createTheme } from "@mui/material";

export const ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#696fdd",
    },

    background: {
      default: "#ffffff",
      paper:
        "#linear-gradient(357deg, rgba(105,111,221,1) 0%, rgba(163,168,240,1) 100%)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#494c5f",
    },
    divider: "#b3b5c6",
  },
});
