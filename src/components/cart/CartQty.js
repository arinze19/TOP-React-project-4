import '../../styles/cart/cart-qty.css';
import { useDispatch } from 'react-redux';

export default function CartQty({ item }) {
  const dispatch = useDispatch();

  return (
    <div className='cart-qty-container'>
      <p
        className='cart-qty__modify decrement'
        id={item.id}
        onClick={() =>
          dispatch({
            type: 'MODIFY_QUANTITY',
            payload: { item, operation: 'decrement' },
          })
        }
      >
        -
      </p>
      <p>{item.qty}</p>
      <p
        className='cart-qty__modify increment'
        id={item.id}
        onClick={() =>
          dispatch({
            type: 'MODIFY_QUANTITY',
            payload: { item, operation: 'increment' },
          })
        }
      >
        +
      </p>
    </div>
  );
}
