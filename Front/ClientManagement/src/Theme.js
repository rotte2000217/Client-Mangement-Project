import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        light: '#ffc709',
        main: '#ffc709',
        contrastText: '#ffffff',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});