import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#f45334',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  // typography: {
  //   fontFamily: [
  //     'Open Sans',
  //     'Roboto',
  //     'Arial',
  //     'sans-serif',
  //   ].join(','),
  // },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       minWidth: 150,
    //       textTransform: 'capitalize'
    //     },
    //     text: {
    //       minWidth: 100
    //     },
    //     contained: {
    //       fontWeight: 600,
    //       fontSize: 16,
    //       borderRadius: 100,
    //       padding: '8px 32px'
    //     }
    //   }
    // },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff'
        }
      }
    },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none',
    //     }
    //   }
    // },
    
  }
});

export default responsiveFontSizes(theme);