export const addToCart = (state, product) => {
  let existingProd;
  let sizeIsSame;
  const newCart = [...state.cart];
  const newProduct = {
    ...product,
    qty: 1,
    imageUrl: product.imagesUrl[2].url,
  };

  const prodIdx = newCart.findIndex((prod) => prod.id === product.id);
  if (prodIdx >= 0) {
    existingProd = newCart.find((prod) => prod.id === newProduct.id);
    sizeIsSame = existingProd.selectedSize === newProduct.selectedSize;
  }

  if (existingProd && sizeIsSame) {
    newProduct.qty = state.cart[prodIdx].qty + 1;
    newCart.splice(prodIdx, 1, newProduct);
  } else {
    newCart.push(newProduct);
  }

  return {
    ...state,
    cart: newCart,
    totalPrice: priceHelper.totalPrice(newCart),
    deliveryFee: priceHelper.deliveryFee(newCart),
  };
};

export const removeFromCart = (state, item) => {
  const id = item.id;
  const newCart = [...state.cart];
  const deleteIdx = newCart.findIndex((x) => x.id === id);
  newCart.splice(deleteIdx, 1);

  return {
    ...state,
    cart: newCart,
    totalPrice: priceHelper.totalPrice(newCart),
    deliveryFee: priceHelper.deliveryFee(newCart),
  };
};

export const modifyCartItemQty = (state, payload) => {
  const id = payload.item.id;

  const newCart = [...state.cart];
  const itemIdx = newCart.findIndex((x) => x.id === id);

  if (payload.operation === 'decrement') {
    if (newCart[itemIdx].qty < 2) return removeFromCart(state, payload.item);
    newCart[itemIdx].qty -= 1;
  } else {
    newCart[itemIdx].qty += 1;
  }

  return {
    ...state,
    cart: newCart,
    totalPrice: priceHelper.totalPrice(newCart),
    deliveryFee: priceHelper.deliveryFee(newCart),
  };
};

// ======================================  helper functions
const priceHelper = {
  totalPrice(cart) {
    return cart.reduce((accum, item) => {
      return accum + item.price * item.qty;
    }, 0);
  },
  deliveryFee(cart) {
    let deliveryFee = (this.totalPrice(cart) * 0.03).toFixed(2);

    if (this.totalPrice(cart) >= 200) {
      deliveryFee = 'FREE';
    }

    return deliveryFee;
  },
};
