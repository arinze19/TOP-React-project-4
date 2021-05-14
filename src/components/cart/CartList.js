import CartItem from "./CartItem";
import "../../styles/cart/cart-list.css";

export default function CartList({ cart, removeFromCart, modifyCart }) {
  const list = cart.map((item) => (
    <CartItem
      item={item}
      key={item.id}
      removeFromCart={removeFromCart}
      modifyCart={modifyCart}
    />
  ));
  return list;
}
