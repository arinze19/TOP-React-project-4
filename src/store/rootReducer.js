import { toggleCart, addToCart, removeFromCart, modifyCartItemQty } from './reducers/cart';
import { setNotification } from './reducers/notification';
import { loadAllProducts } from './reducers/product';
import { signIn, signUp, logOut } from './reducers/auth';

const initialState = {
  products: [],
  cart: [],
  user: {},
  token: null,
  isLoggedIn: false,
  cartIsOpen: false,
  totalPrice: 0,
  deliveryFee: 0,
  freeDeliveryThreshold: 200,
  loading: {
    inline: false,
    fullpage: false
  },
  notification: {
    isActive: false,
    status: 'success',
    message: ''
  }
};

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    case 'TOGGLE_CART':
      return toggleCart(state);
    case 'ADD_TO_CART':
      return addToCart(state, payload.product);
    case 'REMOVE_FROM_CART':
      return removeFromCart(state, payload.item);
    case 'MODIFY_QUANTITY':
      return modifyCartItemQty(state, payload);
    case 'SET_NOTIFICATION':
      return setNotification(state, payload);
    case 'LOAD_ALL_PRODUCTS':
      return loadAllProducts(state, payload);
    case 'SIGN_IN':
      return signIn(state, payload);
    case 'SIGN_UP': 
      return signUp(state, payload);
    case 'LOG_OUT':
      return logOut(state, payload);
    default:
      return state;
  }
}

// ============= thunk functions
// export async function fetchProducts(dispatch, getState) {
//   const response = await fetch(
//     'https://react-project-4-api.herokuapp.com/api/v1/products'
//   );
//   const { data } = await response.json();
//   dispatch({ type: 'LOAD_ALL_PRODUCTS', payload: data.products });
// }
