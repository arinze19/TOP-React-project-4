import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/UI/notification.css';

export default function Notification() {
  const { notification } = useSelector(state => state);

  return (
    <div className={`notification-container ${notification.isActive ? 'notification-active' : 'notification-inactive'}`}>
      <p>{notification.status === 'error' ? '❗️' : '✅'} {notification.message}</p>
    </div>
  )
}
