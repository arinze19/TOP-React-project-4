import '../../styles/UI/add-to-cart-btn.css';
import { notification } from '../../helpers/messageHelper';
import { useDispatch } from 'react-redux';

function AddToCartBtn({ product, selectedSize, sizeIsSelected }) {
  const dispatch = useDispatch();
  const disable = !sizeIsSelected;
  const cardState = sizeIsSelected
    ? 'add-to-cart-btn-active'
    : 'add-to-cart-btn-disabled';
  const handleClick = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { product: { ...product, selectedSize } } })
    dispatch(notification.create('success', 'Successfully added item to cart' ))

    setTimeout(() => dispatch(notification.reset()), 4000)
  }

  return (
    <>
      <button
        className={`add-to-cart-btn ${cardState}`}
        onClick={handleClick}
        disabled={disable}
      >
        Add to Cart
      </button>
      <p>Please select a size first in order to cart</p>
    </>
  );
}

export default AddToCartBtn;
