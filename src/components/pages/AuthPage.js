import React from 'react';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import '../../styles/pages/auth-page.css';

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
