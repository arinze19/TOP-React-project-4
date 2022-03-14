import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/UI/Cart';
import Routes from './Routes';
import TheFooter from './components/layout/TheFooter';
import Notification from './components/UI/Notification';

const App = () => {

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Cart />
        <Routes />
        <TheFooter />
        <Notification />
      </BrowserRouter>
    </div>
  );
};

export default App;
