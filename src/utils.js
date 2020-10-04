export function getHourString(time) {
  const date = new Date(time);
  const hours = date.getHours();
  if (hours < 10) {
    return `0${hours}`;
  } else {
    return hours;
  }
}


export function getMinuteString(time) {
  const date = new Date(time);
  const minutes = date.getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  } else {
    return minutes;
  }
}

export function tempConverter(k){
  const converter = k - 273.15;
  return Math.round(converter);
};