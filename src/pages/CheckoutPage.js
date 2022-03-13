import { useState } from 'react';
import CheckoutBar from '../components/UI/CheckoutBar';
import Abeg from '../assets/abeg.svg';
import Paystack from '../assets/paystack.svg';
import Flutterwave from '../assets/flutterwave.svg';
import '../styles/pages/checkout-page.css';

function CheckoutPage() {
    document.title = 'Octane | Checkout'
    const [deliveryInfo, setDeliveryInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        state: '',
        zip: ''
    })
    const [billingInfo, setBillingInfo] = useState({
        cardNumber: '',
        pin: '',
        expiryDate: '',
        cvv: ''
    })
    const handleChangeDelivery = (e) => {
        setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value })
    }
    const handleChangeBilling = (e) => {
        setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="checkout-page-container">
            <CheckoutBar />
            <form onSubmit={handleSubmit} className="checkout-page__form">
                <div className="checkout-page__delivery-info">
                    <h4>Delivery Information:</h4>
                    <input className="w-full" type="text" placeholder="Email" name="email" value={deliveryInfo.email} onChange={(e) => handleChangeDelivery(e)} />
                    <div className="grid w-two">
                        <input type="text" placeholder="First Name" name="firstName" value={deliveryInfo.firstName} onChange={(e) => handleChangeDelivery(e)} />
                        <input type="text" placeholder="Last Name" name="lastName" value={deliveryInfo.lastName} onChange={(e) => handleChangeDelivery(e)} />
                    </div>
                    <input className="w-full" type="text" placeholder="Country" name="country" value={deliveryInfo.city} onChange={(e) => handleChangeDelivery(e)} />
                    <div className="grid w-three">
                        <input type="text" placeholder="City" name="city" value={deliveryInfo.country} onChange={(e) => handleChangeDelivery(e)} />
                        <input type="text" placeholder="State/Province" name="state" value={deliveryInfo.state} onChange={(e) => handleChangeDelivery(e)} />
                        <input type="text" placeholder="ZIP Code" name="zip" value={deliveryInfo.zip} onChange={(e) => handleChangeDelivery(e)} />
                    </div>
                </div>
                <br />
                <br />
                <div className="checkout-page__billing-info">
                    <h4>Billing Information:</h4>
                    <input className="w-full" type="number" placeholder="Card Number" name="cardNumber" value={billingInfo.cardNumber} onChange={(e) => handleChangeBilling(e)} />
                    <div className="grid w-three">
                        <input type="number" placeholder="PIN" name="pin" value={billingInfo.pin} onChange={(e) => handleChangeBilling(e)} />
                        <input type="number" placeholder="Expiry Date" name="expiryDate" value={billingInfo.expiryDate} onChange={(e) => handleChangeBilling(e)} />
                        <input type="number" placeholder="CVV" name="cvv" value={billingInfo.cvv} onChange={(e) => handleChangeBilling(e)} />
                    </div>
                </div>
                <br />
                <button className="btn">Checkout</button>
                <br />
                <br />
                <span>Payment is secured by:</span>
                <div className="checkout-page__footer">
                    <img src={Abeg} alt="abeg app logo" />
                    <img src={Paystack} alt="paystack logo" />
                    <img src={Flutterwave} alt="flutterwave logo" />
                </div>
            </form>
        </div>
    )
}

export default CheckoutPage