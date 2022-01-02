import { addToCart, removeFromCart, modifyCartItemQty } from './actions/cart';

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
      return { ...state, products: payload };
    case 'AUTH_CALL':
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        token: payload.token,
      };
    case 'LOG_OUT': 
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        token: null
      }
    default:
      return state;
  }
}

// ============= thunk functions
export async function fetchProducts(dispatch, getState) {
  const response = await fetch(
    'https://react-project-4-api.herokuapp.com/api/v1/products'
  );
  const { data } = await response.json();
  dispatch({ type: 'LOAD_ALL_PRODUCTS', payload: data.products });
}
