import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import 'styles/global-styles';
import 'styles/global.less';
import registerServiceWorker from 'registerServiceWorker';
import theme from 'styles/theme';
import configureStore from 'store';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
