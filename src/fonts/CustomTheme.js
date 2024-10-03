import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


// Create a Material-UI theme
export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif', // Default font for the app
    h1: {
      fontFamily: 'Righteous, sans-serif', // Specific font for h1
    },
    h2: {
      fontFamily: 'Righteous, sans-serif', // Specific font for h2 (if needed)
    },
  },
});


