export const addToCart = (state, product) => {
  let existingProd;
  let sizeIsSame;
  const newCart = [...state.cart];
  const newProduct = {
    ...product,
    qty: 1,
    imageUrl: product.imgs[2].url,
  };

  const prodIdx = newCart.findIndex((prod) => prod.id === product.id);
  if(prodIdx >= 0) {
    existingProd = newCart.find(prod => prod.id === newProduct.id);
    sizeIsSame = existingProd.selectedSize === newProduct.selectedSize;
  }

  if (existingProd && sizeIsSame) {
    newProduct.qty = state.cart[prodIdx].qty + 1;
    newCart.splice(prodIdx, 1, newProduct);
  } else {
    newCart.push(newProduct);
  }

  return { ...state, cart: newCart }
};
