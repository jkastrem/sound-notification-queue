class NotificationsQueue {
  protected queue: Array<HTMLAudioElement>;

  constructor() {
    this.queue = new Proxy<Array<HTMLAudioElement>>([], {
      set(target, property, value) {
        if (property === 'length') target.length = value;
        else if (Number(property) === 0) value.play();
        else target[Number(property)] = value;
        return true;
      }
    })
  }

  push(sound: HTMLAudioElement) {
    sound.onended = () => {
      this.queue.shift()?.play();
    }
    this.queue.push(sound);
  }
}

export const soundNotifications = new NotificationsQueue();
