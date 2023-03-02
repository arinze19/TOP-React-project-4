import React from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import Cart from './components/UI/Cart';
import Routes from './Routes';
import TheFooter from './components/layout/TheFooter';
import Notification from './components/UI/Notification';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Cart />
      <Routes />
      <TheFooter />
      <Notification />
    </HashRouter>
  );
};

export default App;
