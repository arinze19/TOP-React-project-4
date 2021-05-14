import CartList from "../cart/CartList";
import "../../styles/UI/cart.css";

function Cart({ cart, cartIsOpen, toggleCart, removeFromCart, modifyCart }) {
  if (cartIsOpen) {
    return (
      <div className="cart-container">
        <div className="cart-container__header">
          <h1>Your Cart.</h1>
          <p onClick={() => toggleCart()}>
            <i className="las la-times"></i>
          </p>
        </div>
        <hr />
        <CartList
          cart={cart}
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
