export function convertTimeMilliseconds(duration: number) {
  let minutes = Math.floor(duration / 60000);
  let seconds = ((duration % 60000) / 1000).toFixed(0);

  if (seconds === '60') {
    (seconds = '00'), (minutes += 1);
  }
  const timeString = [minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}

export function convertTimeSeconds(duration: number) {
  let minutes = Math.floor(duration / 360);
  let seconds = (duration % 60).toFixed(0);

  if (seconds === '60') {
    (seconds = '00'), (minutes += 1);
  }
  const timeString = [minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}
