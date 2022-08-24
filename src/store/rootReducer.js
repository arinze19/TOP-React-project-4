import { toggleCart, addToCart, removeFromCart, modifyCartItemQty, applyGiftCard } from './reducers/cart';
import { setNotification, setLoading } from './reducers/notification';
import { loadAllProducts } from './reducers/product';
import { signIn, signUp, logOut } from './reducers/auth';

const initialState = {
  cart: [],
  user: {},
  token: null,
  cartIsOpen: false,
  totalPrice: 0,
  deliveryFee: 0,
  freeDeliveryThreshold: 200,
  loading: {
    signUp: false,
    signIn: false,
    newsLetter: false,
    giftCard: false
  },
  notification: {
    isActive: false,
    status: 'success',
    message: ''
  },
  giftCard: {}
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
    case 'SET_LOADING':
      return setLoading(state, payload);
    case 'APPLY_GIFT_CARD':
      return applyGiftCard(state, payload)
    default:
      return state;
  }
}