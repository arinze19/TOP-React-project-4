import "../../styles/cart/cart-qty.css";

export default function CartQty({ qty, modifyCart, id }) {
  return (
    <div className="cart-qty-container">
      <p
        className="cart-qty__modify decrement"
        id={id}
        onClick={modifyCart}
      >
        -
      </p>
      <p>{qty}</p>
      <p
        className="cart-qty__modify increment"
        id={id}
        onClick={modifyCart}
      >
        +
      </p>
    </div>
  );
}
