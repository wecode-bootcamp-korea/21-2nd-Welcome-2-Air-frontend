import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Routes from './Routes';
import GlobalStyle from './Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);

Modal.setAppElement('#root');
