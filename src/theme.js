import { createTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#173945',
  secondary: '#ffb94f',
};

const fonts = {
  montserrat: '"Montserrat", sans-serif',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontFamily: fonts.montserrat,
    fontSize: 16,
  },
});
