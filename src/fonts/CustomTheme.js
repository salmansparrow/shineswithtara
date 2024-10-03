import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import "@fontsource/poppins"; // Import Poppins font (install @fontsource/poppins via npm or use CDN in index.html)

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: "Poppins",
      fontWeight: 700, // Bold for h1
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 600, // Semi-bold for h2
    },
    body1: {
      fontFamily: "Poppins",
      fontWeight: 400, // Regular weight for body text
    },
  },
});
