export const soundQueue = (notificationsQueue: Array<HTMLAudioElement>) => {
  let soundIndex = 0;

  return new Proxy(notificationsQueue, {
    set(target, property, value: HTMLAudioElement | number) {
      if (property === 'length' && typeof value === 'number') {
        target.length = value;
        return true;
      } else if (value instanceof HTMLAudioElement) {
        target.push(value);
        value.onended = () => {
          const nextSound = target[soundIndex += 1];
          if (nextSound === undefined) {
            target = [];
            soundIndex = 0;
          } else {
            nextSound.play();
          }
          console.log(target);
        }
        value.play();
      }
      return true;
    }
  })
}
