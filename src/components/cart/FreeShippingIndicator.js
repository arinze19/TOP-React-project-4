import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/cart/free-shipping-indicator.css';

export default function FreeShippingIndicator() {
  const { totalPrice, freeDeliveryThreshold } = useSelector(state => state);
  const counterStyle = {
    width: `${(totalPrice / freeDeliveryThreshold) * 100}%`
  }
  let freeDeliveryStatus = `You are $${freeDeliveryThreshold - totalPrice} from free shipping`

  if (totalPrice >= freeDeliveryThreshold) freeDeliveryStatus = 'Congratulations, you have free shipping!'
  
  return (
    <div className='free-shipping-indicator-container'>
      <p>{freeDeliveryStatus}</p>
      <div className='free-shipping-indicator__main'>
        <div className='free-shipping-indicator__main__counter' style={counterStyle}></div>
      </div>
    </div>
  );
}
