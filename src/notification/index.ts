export const soundQueue = (notificationsQueue: Array<HTMLAudioElement>) => {
  let soundIndex = 0;

  return new Proxy(notificationsQueue, {
    set(target, property, value: HTMLAudioElement | number) {
      if (property === 'length' && typeof value === 'number') {
        target.length = value;
        return true;
      } else if (value instanceof HTMLAudioElement && !isNaN(Number(property))) {
        target[Number(property)] = value;
        value.onended = () => {
          const nextSound = target[soundIndex += 1];
          console.log(`end ${soundIndex}`)
          nextSound?.play();
        }
        value.play();
      }
      return true;
    }
  })
}
