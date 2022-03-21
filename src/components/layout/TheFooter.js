import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeToNewsletter } from '../../helpers/thunk';
import '../../styles/layout/the-footer.css';

export default function TheFooter() {
  const { loading } = useSelector(state => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    setEmail('');
    e.preventDefault();
    dispatch(subscribeToNewsletter(email))
  }

  return (
    <div className='footer-container'>
      <main>
        <div className='form'>
          <p>be the first to know when we have cool stuff</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type='email' value={email} onChange={(e) => handleChange(e)} />
          </form>
          <button className="btn" disabled={loading.newsLetter}>
             Let's go <i className={`${loading.newsLetter ? 'las la-atom spinner' : 'lab la-telegram-plane'}`}></i>
          </button>
        </div>
        <div className='footer-grid'>
          <div className='footer-links'>
            <h4>Help</h4>
            <ul>
              <li>1-234-5678-9000</li>
              <li>1-234-5678-9001(Text)</li>
              <li>FAQ/Contact Us</li>
              <li>Returns/Exchanges</li>
              <li>help@octane.io</li>
            </ul>
          </div>
          <div className='footer-links'>
            <h4>Company</h4>
            <ul>
              <li>Affiliate Programs</li>
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Our Materials</li>
              <li>Wholesale</li>
              <li>Press</li>
              <li>Legal</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className='footer-links'>
            <h4>Shop</h4>
            <ul>
              <li>Mens Apparel</li>
              <li>Womens Apparel</li>
              <li>GiftCards/Discounts</li>
              <li>Socks</li>
              <li>store locations</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
