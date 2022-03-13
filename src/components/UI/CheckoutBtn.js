import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/UI/checkout-btn.css';

function CheckoutBtn() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  const cardState = cart.length !== 0
    ? 'checkout-btn-active'
    : 'checkout-btn-disabled';

  return (
    <Link to={cart.length ? '/checkout' : '#'}>
      <div className={`checkout-btn ${cardState}`} onClick={() => dispatch({ type: 'TOGGLE_CART' })}>
        CHECKOUT
      </div>
    </Link>
  )
}

export default CheckoutBtn
