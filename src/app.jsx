import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from './components/header';
import { Home } from './views/home';
import { About } from './views/about';
import { Rates } from './views/rates';

import { store } from './state-manage/store';
import { theme } from './theme';

export const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/rates" component={Rates} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </StoreProvider>
);
