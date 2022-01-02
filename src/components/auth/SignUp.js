import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import asyncCall from '../../helpers/AsyncCall';
import '../../styles/auth/sign-up.css';

export default function SignUp() {
  const dispatch = useDispatch();

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const styles = {
    visibility: isSuccessful ? 'visible' : 'hidden',
  };

  const handleChange = (e, prop) => {
    const value = e.target.value;
    switch (prop) {
      case 'signUpEmail':
        return setSignUpEmail(value);
      case 'signUpPassword':
        return setSignUpPassword(value);
      case 'signUpName':
        return setSignUpName(value);
      default:
        return null;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email: signUpEmail,
      password: signUpPassword.trim(),
      name: signUpName,
    };

    const data = await asyncCall('sign-up', body);

    if (data) {
      setIsSuccessful(true);
      dispatch({ type: 'AUTH_CALL', payload: data })
      
      setSignUpEmail('');
      setSignUpName('');
      setSignUpPassword('');
   }
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
          name='sign-up-email'
          autoComplete='off'
          value={signUpEmail}
          onChange={(e) => handleChange(e, 'signUpEmail')}
        />
        <br />
        <br />
        <label htmlFor='sign-up-name'>Name:</label> <br />
        <input
          type='text'
          name='sign-up-name'
          autoComplete='off'
          value={signUpName}
          onChange={(e) => handleChange(e, 'signUpName')}
        />
        <br />
        <br />
        <label htmlFor='sign-up-password'>Password:</label> <br />
        <input
          type='password'
          autoComplete='off'
          name='sign-up-password'
          value={signUpPassword}
          onChange={(e) => handleChange(e, 'signUpPassword')}
        />{' '}
        <br />
        <button className='btn'>sign up</button>
      </form>
      <p className='verification' style={styles}>
        Almost there! An verification email has been sent to {signUpEmail},
        please verify your email and then login
      </p>
    </div>
  );
}
