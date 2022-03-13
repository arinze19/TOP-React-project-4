import React from 'react';
import { useSelector } from 'react-redux';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import '../styles/pages/auth-page.css';

export default function AuthPage() {
  const { isLoggedIn } = useSelector(state => state);

  if(isLoggedIn) {
    alert('Successfully logged out');
  }

  return (
    <div className='auth-container'>
      <main className='auth-container__main'>
        <Login />
        <SignUp />
      </main>
    </div>
  );
}
