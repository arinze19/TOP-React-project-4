import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cart from './components/UI/Cart';
import Routes from './Routes';
import TheFooter from './components/layout/TheFooter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://react-project-4-api.herokuapp.com/api/v1/products')
      .then((res) => res.json())
      .then(({ data }) => {
        dispatch({
          type: 'LOAD_ALL_PRODUCTS',
          payload: { products: data.products },
        });
      });
  });

  return (
    <div>
      <Cart />
      <Routes />
      <TheFooter />
    </div>
  );
};

export default App;
