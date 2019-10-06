import React, { FunctionComponent, useState } from 'react';
import Navbar from './Navbar';
import { Global } from '../styled/Global.style';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import { ThemeProvider } from 'styled-components';

import { useSelector } from 'react-redux';

const App: FunctionComponent = () => {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </ThemeProvider>
  );
};

export default App;
