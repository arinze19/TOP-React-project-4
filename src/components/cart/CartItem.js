import CartQty from "./CartQty";
import "../../styles/cart/cart-item.css";

export default function CartItem({ item, removeFromCart, modifyCart }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item__image">
        <img src={item.imageUrl} alt="something" />
      </div>

      <div className="cart-item__description">
        <p>{item.name}</p>
        <CartQty qty={item.qty} modifyCart={modifyCart} id={item.id} />
      </div>

      <div className="cart-item__info">
        <div
          className="cart-item__delete"
          id={`${item.id}`}
          onClick={removeFromCart}
        ></div>
        <p>${item.price}</p>
      </div>
    </div>
  );
}
