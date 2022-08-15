function convertTime(duration: number, division: 'second' | 'millisecond') {
  const divisorMin = division === 'second' ? 360 : 60000;
  const divisorSec = division === 'second' ? 60 : 1000;

  let minutes = Math.floor(duration / divisorMin);
  let seconds = ((duration % divisorMin) / divisorSec).toFixed(0);

  if (seconds === '60') {
    (seconds = '00'), (minutes += 1);
  }
  const timeString = [minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}

export { convertTime };
