import CartQty from './CartQty';
import '../../styles/cart/cart-item.css';
import { useDispatch } from 'react-redux';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className='cart-item-container'>
      <div className='cart-item__image'>
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <div className='cart-item__description'>
        <p>
          {item.name} - ({item.selectedSize})
        </p>
        <CartQty item={item} />
      </div>

      <div className='cart-item__info'>
        <p>
          <i
            className='las la-times cart-item__delete'
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: { item } })
            }
            id={`${item.id}`}
          ></i>
        </p>

        <p>${item.price}</p>
      </div>
    </div>
  );
}
