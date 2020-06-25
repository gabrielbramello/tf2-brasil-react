import React from 'react';

import Dashboard from './components/Dashboard';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createMuiTheme(
    {
      palette: {
        primary: {
          main: '#333333',
        },
        secondary: {
          main: '#004d40',
        },
      },
    }
  );
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
    
  );
}

export default App;
