import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyGiftCard } from '../../helpers/thunk';
import '../../styles/UI/checkout-bar.css';

function CheckoutBar() {
    const dispatch = useDispatch();
    const { cart, totalPrice, deliveryFee, loading, giftCard } = useSelector(state => state);
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
    const [pin, setPin] = useState('');

    const toggleCheckout = () => {
        setCheckoutIsOpen(!checkoutIsOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!pin) return;
        dispatch(verifyGiftCard(pin))
    }

    const handleChange = (e) => {
        setPin(e.target.value)
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
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" placeholder="GIFT CARD" value={pin} onChange={(e) => handleChange(e)} />
                        <button type="submit" className="btn">
                            {!loading.giftCard ? 'Apply' : <i className='las la-atom spinner'></i>}
                        </button>
                    </form>
                </div>
                <div className="checkout__details">
                    <section className="checkout__details-main">
                        <p>Shipping</p>
                        <p>${deliveryFee.toFixed(2)}</p>
                    </section>
                    <section className="checkout__details-main">
                        <p>Subtotal</p>
                        <div>
                            <p className={giftCard.discount ? 'strikethrough' : ''}>${(totalPrice + deliveryFee).toFixed(2)}</p>
                            <p className={giftCard.discount ? 'show-discount' : 'hide-discount'}>${((totalPrice + deliveryFee) - ((totalPrice + deliveryFee) * (giftCard.discount / 100))).toFixed(2)}</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBar;
