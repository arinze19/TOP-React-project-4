import '../../styles/UI/add-to-cart-btn.css';
import { useDispatch } from 'react-redux';

function AddToCartBtn({ product, selectedSize, sizeIsSelected }) {
  const dispatch = useDispatch();
  const disable = !sizeIsSelected;
  const cardState = sizeIsSelected
    ? 'add-to-cart-btn-active'
    : 'add-to-cart-btn-disabled';

  return (
    <>
      <button
        className={`add-to-cart-btn ${cardState}`}
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product: { ...product, selectedSize } } })}
        disabled={disable}
      >
        Add to Cart
      </button>
      <p>Please select a size first in order to cart</p>
    </>
  );
}

export default AddToCartBtn;
