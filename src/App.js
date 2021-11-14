import React, { useState } from 'react';
import Cart from './components/UI/Cart';
import Routes from './Routes';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function addToCart(product) {
    const newCart = [...cart];
    const newProduct = {
      qty: 1,
      id: product.id,
      name: product.name,
      imageUrl: product.imgs[2].url,
      price: product.price,
    };

    const prodIdx = cart.findIndex((prod) => prod.id === product.id);

    if (prodIdx >= 0) {
      newProduct.qty = cart[prodIdx].qty + 1;
      newCart.splice(prodIdx, 1, newProduct);
      setCart(newCart);
    } else {
      newCart.push(newProduct);
      setCart(newCart);
    }
  }

  function removeFromCart(e) {
    const id = e.target.id;
    const newCart = [...cart];
    const deleteIdx = newCart.findIndex((x) => x.id === id);
    newCart.splice(deleteIdx, 1);
    setCart(newCart);
  }

  function toggleCart() {
    setCartIsOpen((prevCart) => !prevCart);
  }

  function modifyCart(e) {
    const name = e.target.className;
    const id = e.target.id;

    const newCart = [...cart];
    const itemIdx = newCart.findIndex((x) => x.id === id);

    if (name.includes('decrement')) {
      newCart[itemIdx].qty -= 1;
    } else {
      newCart[itemIdx].qty += 1;
    }

    setCart(newCart);
  }

  return (
    <div>
      <Cart
        cart={cart}
        cartIsOpen={cartIsOpen}
        toggleCart={toggleCart}
        removeFromCart={removeFromCart}
        modifyCart={modifyCart}
      />
      <Routes cart={cart} addToCart={addToCart} toggleCart={toggleCart} />
    </div>
  );
};

export default App;
