import { products } from '../data/products.json';
import { addToCart } from './actions/cart'

const initialState = {
  products: products,
  cart: [],
  isLoggedIn: false,
  cartIsOpen: false,
};

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    case 'TOGGLE_CART':
      return { ...state, cartIsOpen: !state.cartIsOpen };
    case 'ADD_TO_CART':
      return addToCart(state, payload.product);
    default:
      return state;
  }
}

/*  
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
*/
