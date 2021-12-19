//import { products } from '../data/products.json';
import { addToCart, removeFromCart, modifyCartItemQty } from './actions/cart'
import { loadAllProducts } from './actions/product'

const initialState = {
  products: [],
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
    case 'REMOVE_FROM_CART': 
      return removeFromCart(state, payload.item);
    case 'MODIFY_QUANTITY': 
      return modifyCartItemQty(state, payload);
    case 'LOAD_ALL_PRODUCTS': 
      return loadAllProducts(state, payload);
    default:
      return state;
  }
}
