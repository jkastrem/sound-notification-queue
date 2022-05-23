import React from 'react';
import {soundNotification} from './constants';
import {soundNotifications} from './notification'

export const App = () => {
  const notifiaction = new Audio(soundNotification.toString());

  const pushNotification = () => soundNotifications.push(notifiaction);

  return (
    <div>
      <button onClick={() => pushNotification()}>Sound notifications</button>
    </div>
  );
}
