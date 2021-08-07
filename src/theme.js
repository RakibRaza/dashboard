import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    background: {
      default: '#f9f9fa'
    },
    primary: {
      main: '#fff'
    }
  },
  components: {
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        img {
          width: 100%;
          display: block;
        }
      `
    }
  },
})