import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../helpers/thunk';
import '../../styles/auth/login.css';

export default function Login() {
  const dispatch = useDispatch();

  const [info, setInfo] = useState({ email: '', password: '' });


  const handleChange = (e) => { 
     setInfo({ ...info, [e.target.name]: e.target.value})
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(info));
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='login-container__form-control'
      >
        <label htmlFor='login-email'>Email:</label> <br />
        <input
          type='text'
          name='email'
          autoComplete='off'
          required
          value={info.email}
          onChange={(e) => handleChange(e, 'loginEmail')}
        />
        <br />
        <br />
        <label htmlFor='login-password'>Password:</label> <br />
        <input
          type='password'
          name='password'
          autoComplete='off'
          required
          value={info.password}
          onChange={(e) => handleChange(e, 'loginPassword')}
        />{' '}
        <br />
        <button className='btn' type="submit">
          login
          <i className={`las la-atom`}></i>
        </button>
      </form>
    </div>
  );
}
