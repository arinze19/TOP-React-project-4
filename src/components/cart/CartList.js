import CartItem from './CartItem';
import '../../styles/cart/cart-list.css';
import { useSelector } from 'react-redux';

export default function CartList() {
  const { cart } = useSelector((store) => store);
  const list = cart.map((item) => (
    <CartItem item={item} key={item.id + item.selectedSize} />
  ));
  return list;
}
