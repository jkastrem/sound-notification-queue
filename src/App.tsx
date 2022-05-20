import React from 'react';
import {soundNotification} from './constants';
import {soundQueue} from './notification'

export const App = () => {
  const notifications: Array<HTMLAudioElement> = [];
  const queue = soundQueue(notifications);
  const notifiaction = new Audio(soundNotification.toString());

  const pushNotification = () => queue.push(notifiaction);

  return (
    <div>
      <button onClick={() => {
        console.log('click');
        setTimeout(() => pushNotification(), 1500);
      }}>Sound notifications</button>
    </div>
  );
}
