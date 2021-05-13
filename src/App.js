import React, { useState } from "react";
import Cart   from "./components/UI/Cart"
import Routes from "./Routes";

const App = () => {
  const [cart, setCart] = useState([]);
  function handleClick(product) {
    const newCart = [...cart];
    const newProduct = {
      qty: 1,
      id: product.id,
      name: product.name,
      imageUrl: product.imgs[0],
      price: product.price,
    };

    const prodIdx = cart.findIndex((prod) => prod.id === product.id);

    if (prodIdx >= 0) {
      newProduct.qty = cart[prodIdx].qty + 1;
      newCart.splice(prodIdx, 1, newProduct);
      setCart(newCart);
    } else {
      newCart.push(newProduct)
      setCart(newCart);
    }
  }

  return (
    <div>
      <Cart />
      <Routes cart={cart} handleClick={handleClick} />
    </div>
  );
};

export default App;
