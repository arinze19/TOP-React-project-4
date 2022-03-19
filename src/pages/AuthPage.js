import React from 'react';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import '../styles/pages/auth-page.css';

export default function AuthPage() {
  return (
    <div className='auth-container'>
      <main className='auth-container__main'>
        <Login />
        <SignUp />
      </main>
    </div>
  );
}
