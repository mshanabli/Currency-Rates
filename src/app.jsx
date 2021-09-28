import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Baseline from '@material-ui/core/ScopedCssBaseline';

import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Baseline>App</Baseline>
  </ThemeProvider>
);
