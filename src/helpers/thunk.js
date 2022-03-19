import { loadAllProducts } from '../store/actions/product';
import { signUp } from '../store/actions/auth';
import { notification } from './messageHelper';
import api from './api';
import { signIn } from '../store/reducers/auth';

const apiCall = (data) => new Promise((res, rej) => {
  setTimeout(() => res({ user: data, token: 'almnejbcijbihwb' }), 3000);
})

export function getProducts() {
  return async function (dispatch) {
    const response = await api.get('/products');
    const { data } = response.data;
    dispatch(loadAllProducts(data.products))
  }
}

export function register(data) {
  return async function (dispatch) {
    const response = await apiCall(data);
    dispatch(signUp(response));
    dispatch(notification.create('success', `Hey there ${data.name}, Welcome to Octane. We just sent an email to you, please verify your email and enjoy your shopping 🛍 `))

    setTimeout(() => dispatch(notification.reset()), 4000)
  }
}

export function login(data) {
  return async function (dispatch) {
    const response = await apiCall(data);
    dispatch(signIn(response));
    dispatch(notification.create('success', `Hey There ${data.name}, welcome back to the lab ;)`));

    setTimeout(() => dispatch(notification.reset(), 4000))
  }
}
