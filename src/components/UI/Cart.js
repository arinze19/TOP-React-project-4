import CartList from '../cart/CartList';
import '../../styles/UI/cart.css';
import { useSelector, useDispatch } from 'react-redux';

function Cart({ removeFromCart, modifyCart }) {
  const { cartIsOpen } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (cartIsOpen) {
    return (
      <div className='cart-container'>
        <div className='cart-container__header'>
          <h1>Your Cart.</h1>
          <p onClick={() => dispatch({ type: 'TOGGLE_CART' })}>
            <i className='las la-times'></i>
          </p>
        </div>
        <hr />
        <CartList
          removeFromCart={removeFromCart}
          modifyCart={modifyCart}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default Cart;
