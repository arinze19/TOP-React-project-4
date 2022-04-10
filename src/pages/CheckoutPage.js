import { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckoutBar from '../components/UI/CheckoutBar';
import Abeg from '../assets/abeg.svg';
import Paystack from '../assets/paystack.svg';
import Flutterwave from '../assets/flutterwave.svg';
import '../styles/pages/checkout-page.css';

function CheckoutPage() {
    document.title = 'Octane | Checkout'
    const { user } = useSelector(state => state);

    const [deliveryInfo, setDeliveryInfo] = useState({
        email: user.email || '',
        firstName: '',
        lastName: '',
        city: '',
        address: '',
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
                    <input className="w-full" type="text" placeholder="Email" name="email" required value={deliveryInfo.email} onChange={(e) => handleChangeDelivery(e)} />
                    <div className="grid w-two">
                        <input type="text" placeholder="First Name" name="firstName" required value={deliveryInfo.firstName} onChange={(e) => handleChangeDelivery(e)} />
                        <input type="text" placeholder="Last Name" name="lastName" required value={deliveryInfo.lastName} onChange={(e) => handleChangeDelivery(e)} />
                    </div>
                    <input className="w-full" type="text" placeholder="Address" name="address" required value={deliveryInfo.address} onChange={(e) => handleChangeDelivery(e)} />
                    <div className="grid w-three">
                        <input type="text" placeholder="City" name="city" required value={deliveryInfo.city} onChange={(e) => handleChangeDelivery(e)} />
                        <input type="text" placeholder="State/Province" name="state" required value={deliveryInfo.state} onChange={(e) => handleChangeDelivery(e)} />
                        <input type="number" placeholder="ZIP Code" name="zip" required value={deliveryInfo.zip} onChange={(e) => handleChangeDelivery(e)} />
                    </div>
                </div>
                <br />
                <br />
                <div className="checkout-page__billing-info">
                    <h4>Billing Information:</h4>
                    <input className="w-full" type="number" placeholder="Card Number" name="cardNumber" required value={billingInfo.cardNumber} onChange={(e) => handleChangeBilling(e)} />
                    <div className="grid w-three">
                        <input type="number" placeholder="PIN" name="pin" required value={billingInfo.pin} onChange={(e) => handleChangeBilling(e)} />
                        <input type="number" placeholder="Expiry Date" name="expiryDate" required value={billingInfo.expiryDate} onChange={(e) => handleChangeBilling(e)} />
                        <input type="number" placeholder="CVV" name="cvv" required value={billingInfo.cvv} onChange={(e) => handleChangeBilling(e)} />
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