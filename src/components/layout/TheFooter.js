import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/layout/the-footer.css';

export default function TheFooter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return 

    setLoading(true);
  
      try {
        const response = await axios.post('/newsletter/subscribe', { email });
        const { message } = response.data;

        toast.success(message, { duration: 4000, position: 'bottom-center' })
      } catch (err) {
        const message = err.response.data.message || 'Sorry, something went wrong please try again later'
        toast.error(message, { duration: 4000, position: 'bottom-center' })
      } finally {
        setEmail('');
        setLoading(false);
      }
  }

  return (
    <div className='footer-container'>
      <Toaster />

      <main>
        <div className='form'>
          <p>be the first to know when we have cool stuff</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type='email' value={email} onChange={(e) => handleChange(e)} />
          </form>
          <button className="btn" type="submit" onClick={(e) => handleSubmit(e)} disabled={loading}>
             Let's go <i className={`${loading ? 'las la-atom spinner' : 'lab la-telegram-plane'}`}></i>
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
