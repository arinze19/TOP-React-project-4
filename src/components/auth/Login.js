import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import asyncCall from '../../helpers/AsyncCall';
import '../../styles/auth/login.css';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(true);

  const styles = {
    visibility: isEmailVerified ? 'hidden' : 'visible',
  };

  const handleChange = (e, prop) => {
    const value = e.target.value;
    switch (prop) {
      case 'loginEmail':
        return setLoginEmail(value);
      case 'loginPassword':
        return setLoginPassword(value);
      default:
        return null;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email: loginEmail.trim(),
      password: loginPassword,
    };

    const data = await asyncCall('sign-in', body);

    if (data && !data.user.isEmailVerified) {
      setIsEmailVerified(false);
    } else if (data && data.user.isEmailVerified) {
      history.replace('/')
      dispatch({ type: 'AUTH_CALL', payload: data });
      alert('successfully logged in');
    }
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
          name='login-email'
          value={loginEmail}
          autoComplete='off'
          onChange={(e) => handleChange(e, 'loginEmail')}
        />
        <br />
        <br />
        <label htmlFor='login-password'>Password:</label> <br />
        <input
          type='password'
          name='login-password'
          autoComplete='off'
          value={loginPassword}
          onChange={(e) => handleChange(e, 'loginPassword')}
        />{' '}
        <br />
        <button className='btn'>login</button>
      </form>
      <p className='verification' style={styles}>
        Oops, looks like you need to verify your email({loginEmail}) first.
        Please verify your email and login
      </p>
    </div>
  );
}
