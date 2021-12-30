import React from 'react';
import '../../styles/pages/auth-page.css';

export default function AuthPage() {
  return (
    <div className='auth-container'>
      <div className='auth-log-in'>
        <h2>Login</h2>
        <form className='auth-log-in__form-control'>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' />
          <label htmlFor='password'>Password:</label>
          <input type='password' />
          <button className="btn">sign in</button>
        </form>
      </div>
      <div className='auth-sign-up'></div>
    </div>
  );
}
