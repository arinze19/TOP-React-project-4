import CartQty from './CartQty';
import '../../styles/cart/cart-item.css';

export default function CartItem({ item }) {
  return (
    <div className='cart-item-container'>
      <div className='cart-item__image'>
        <img src={item.imageUrl} alt='something' />
      </div>

      <div className='cart-item__description'>
        <p>
          {item.name} - ({item.selectedSize})
        </p>
        <CartQty qty={item.qty} id={item.id} />
      </div>

      <div className='cart-item__info'>
        <p>
          <i className='las la-times cart-item__delete' id={`${item.id}`}></i>
        </p>

        <p>${item.price}</p>
      </div>
    </div>
  );
}
