import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#670B25', // Cor principal do projeto original
      light: '#99042E',
      dark: '#50091D',
    },
    secondary: {
      main: '#f7f7f7',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});