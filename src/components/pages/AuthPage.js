import React from 'react';
import '../../styles/pages/auth-page.css';

export default function AuthPage() {


  return (
    <div className='auth-container'>
      <main className="auth-container__main">
        <div className='auth-container__main__login'>
          <h2>Login</h2>
          <form className='auth-container__form-control'>
            <label htmlFor='email'>Email:</label> <br />
            <input type='text' name='email' /> 
            <br />
            <br />
            <label htmlFor='password'>Password:</label> <br />
            <input type='password' /> <br />
            <button className='btn'>login</button>
          </form>
        </div>
        <div className='auth-container__main__sign-up'>
          <h2>Sign Up</h2>
          <p>
            We NEVER save credit card info.
            Registering with us makes checkout easier and faster and enables us
            recommend better products based on your taste
          </p>
          <form className='auth-container__form-control'>
            <label htmlFor='email'>Email:</label> <br />
            <input type='text' name='email' /> 
            <br />
            <br />
            <label htmlFor='name'>Name:</label> <br />
            <input type='text' name='name' /> 
            <br />
            <br />
            <label htmlFor='password'>Password:</label> <br />
            <input type='password' /> <br />
            <button className='btn'>sign up</button>
          </form>
        </div>
      </main>
    </div>
  );
}
