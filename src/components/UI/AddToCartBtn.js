import '../../styles/UI/add-to-cart-btn.css';

function AddToCartBtn({ addToCart, product, sizeIsSelected }) {
  const disable = !sizeIsSelected;
  const cardState = sizeIsSelected
    ? 'add-to-cart-btn-active'
    : 'add-to-cart-btn-disabled';

  return (
    <>
      <button
        className={`add-to-cart-btn ${cardState}`}
        onClick={() => addToCart(product)}
        disabled={disable}
      >
        Add to Cart
      </button>
      <p>Please select a size first in order to cart</p>
    </>
  );
}

export default AddToCartBtn;
