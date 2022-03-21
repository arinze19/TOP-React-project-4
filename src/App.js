import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getProducts } from "./helpers/thunk";
import Cart from './components/UI/Cart';
import Routes from './Routes';
import TheFooter from './components/layout/TheFooter';
import Notification from './components/UI/Notification';
 
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  })

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
