import { products } from '../data/products.json';
import { addToCart, removeFromCart, modifyCartItemQty } from './actions/cart'

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
    case 'REMOVE_FROM_CART': 
      return removeFromCart(state, payload.item);
    case 'MODIFY_QUANTITY': 
      return modifyCartItemQty(state, payload);
    default:
      return state;
  }
}
