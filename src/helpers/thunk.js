import { loadAllProducts } from '../store/actions/product';
import { setLoading } from '../store/actions/notification';
import { signUp, signIn } from '../store/actions/auth';
import { applyGiftCard } from '../store/actions/cart';
import { notification } from './messageHelper';
import api from './api';

export function getProducts() {
  return async function (dispatch) {
    dispatch(setLoading({ prop: 'products', value: true }));

    try {
      const response = await api.get('/products');
      const { data } = response.data;
      dispatch(loadAllProducts(data.products))
    } catch (err) {
      const message = err.response.data.message || 'Sorry something went wrong, please try again later';
      dispatch(notification.create('error', message))

      setTimeout(() => dispatch(notification.reset()), 4000);
    } finally {
      dispatch(setLoading({ prop: 'products', value: false }));
    }
  }
}

export function register(info, history) {
  return async function (dispatch) {
    dispatch(setLoading({ prop: 'signUp', value: true }))

    try {
      const response = await api.post('/auth/sign-up', info);
      const { data } = response.data;
      dispatch(signUp(data));
      history.replace('/')

      setTimeout(() => dispatch(notification.create('success', `Hey there ${info.name}, Welcome to Octane. We just sent an email to you, please verify your email and enjoy your shopping 🛍 `)), 1000)
      setTimeout(() => dispatch(notification.reset()), 5000)
    } catch (err) {
      const message = err.response.data.message || 'Sorry something went wrong, please try again later';
      dispatch(notification.create('error', message))

      setTimeout(() => dispatch(notification.reset()), 4000);
    } finally {
      dispatch(setLoading({ prop: 'signUp', value: false }));
    }
  }
}

export function login(info, history) {
  return async function (dispatch) {
    dispatch(setLoading({ prop: 'signIn', value: true }));

    try {
      const response = await api.post('/auth/sign-in', info);
      const { data } = response.data;
      dispatch(signIn(data));
      history.replace('/');

      setTimeout(() => dispatch(notification.create('success', `Hey There ${data.user.name}, welcome back to the lab ;)`)), 1000)
      setTimeout(() => dispatch(notification.reset()), 5000);
    } catch (err) {
      const message = err.response.data.message || 'Sorry something went wrong, please try again later';
      dispatch(notification.create('error', message))

      setTimeout(() => dispatch(notification.reset()), 4000);
    } finally {
      dispatch(setLoading({ prop: 'signIn', value: false }))
    }
  }
}

export function subscribeToNewsletter(email) {
  return async function (dispatch) {
    dispatch(setLoading({ prop: 'newsLetter', value: true }));

    try {
      const response = await api.post('/newsletter/subscribe', { email });
      const { message } = response.data;

      dispatch(notification.create('success', message));
      setTimeout(() => dispatch(notification.reset()), 4000);
    } catch (err) {
      const message = err.response.data.message || 'Sorry, something went wrong please try again later'
      dispatch(notification.create('error', message))

      setTimeout(() => dispatch(notification.reset()), 4000);
    } finally {
      dispatch(setLoading({ prop: 'newsLetter', value: false }))
    }
  }
}

export function verifyGiftCard(pin) {
  return async function (dispatch) {
    dispatch(setLoading({ prop: 'giftCard', value: true }));

    try {
      const response = await api.post('/booking/verify', { pin: pin.toUpperCase() });
      const { booking } = response.data.data;

      dispatch(applyGiftCard(booking))
      dispatch(notification.create('success', `gift card ${booking.pin} with ${booking.discount}% discount has been applied to your cart`));
      setTimeout(() => dispatch(notification.reset()), 4000);
    } catch (err) {
      const message = err.response.data.message || 'Sorry, something went wrong please try again later'
      dispatch(applyGiftCard({}))
      dispatch(notification.create('error', message))

      setTimeout(() => dispatch(notification.reset()), 4000);
    } finally {
      dispatch(setLoading({ prop: 'giftCard', value: false }))
    }
  }
}
