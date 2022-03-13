import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styles/UI/checkout-bar.css';

function CheckoutBar() {
    const { cart, totalPrice, deliveryFee } = useSelector(state => state);
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);

    const toggleCheckout = () => {
        setCheckoutIsOpen(!checkoutIsOpen);
    }

    return (
        <div className="checkout-container">

            <div className="checkout__header" onClick={toggleCheckout}>
                <span>
                    <i className="las la-shopping-cart"></i>
                    Show order summary
                    
                    <i className="las la-angle-down"></i>
                </span>
                <span>
                ${(+totalPrice + (+deliveryFee)).toFixed(2)}
                </span>
            </div>
            <div className={`checkout__body ${checkoutIsOpen ? 'show' : 'hide'}`}>
                <ul className="checkout__products">
                    {cart.map(item => (<li className="checkout__item" key={item.name + item.selectedSize}>
                        <div className="checkout__left">
                            <div className="checkout__image">
                                <img src={item.imageUrl} alt={item.name} />
                                <div className="checkout__count">{item.qty}</div>
                            </div>
                            <div className="checkout__info">
                                <p>{item.name}</p>
                                <p>{item.selectedSize}</p>
                            </div>
                        </div>
                        <div className="checkout__right">
                            <p>${item.price}</p>
                        </div>
                    </li>))}
                </ul>
                <div className="checkout__gift-card">
                    <form>
                        <input type="text" placeholder="GIFT CARD" />
                        <button className="btn">Apply</button>
                    </form>
                </div>
                <div className="checkout__details">
                    <section className="checkout__details-main">
                        <p>Shipping</p>
                        <p>${deliveryFee}</p>
                    </section>
                    <section className="checkout__details-main">
                        <p>Subtotal</p>
                        <p>${(+totalPrice + (+deliveryFee)).toFixed(2)}</p>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default CheckoutBar;
