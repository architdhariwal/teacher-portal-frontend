import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './MainLayout'; // Import the new MainLayout component

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
    },
    primary: {
      main: '#000000',
    },
    headerCell: {
      main: '#A9A9A9',
    },
    secondary: {
      main: '#ffffff',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;

