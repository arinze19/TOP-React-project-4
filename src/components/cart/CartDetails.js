import React from 'react';
import CheckoutBtn from '../UI/CheckoutBtn';
import { useSelector } from 'react-redux';
import '../../styles/cart/cart-details.css';

export default function CartDetails() {
  const { totalPrice, deliveryFee } = useSelector((state) => state);

  return (
    <div className='cart-details-container'>
      <div className='cart-details-container__total-price'>
        <h3>
          Total Price <i className='las la-dollar-sign'></i> :
        </h3>
        <p>${totalPrice}</p>
      </div>
      <div className='cart-details-container__shipping-price'>
        <h3>
          Shipping Fee <i className='las la-truck'></i> :
        </h3>
        <p>${deliveryFee}</p>
      </div>
      <CheckoutBtn />
    </div>
  );
}
