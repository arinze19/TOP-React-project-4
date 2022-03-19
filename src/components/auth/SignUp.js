import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../helpers/thunk';
import '../../styles/auth/sign-up.css';

export default function SignUp() {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({ email: '', name: '', password: '' })

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(register(info))
  }

  return (
    <div className='sign-up-container'>
      <h2>Sign Up</h2>
      <p>
        We NEVER save credit card info. Registering with us makes checkout
        easier and faster and enables us recommend better products based on your
        taste
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='sign-up-container__form-control'
      >
        <label htmlFor='sign-up-email'>Email:</label> <br />
        <input
          type='text'
          name='email'
          autoComplete='off'
          required
          value={info.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor='sign-up-name'>Name:</label> <br />
        <input
          type='text'
          name='name'
          autoComplete='off'
          required
          value={info.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor='sign-up-password'>Password:</label> <br />
        <input
          type='password'
          autoComplete='off'
          name='password'
          required
          value={info.password}
          onChange={(e) => handleChange(e)}
        />{' '}
        <br />
        <button className='btn' type="submit">
          sign up
          <i className={`las la-atom`}></i>
        </button>
      </form>
    </div>
  );
}


/**
 * 
 *         
 * 
 * 
 *       dispatch(notification.create('error', 'Sorry, something went wrong please try again later'))
      dispatch(notification.reset())

 */
