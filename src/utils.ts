export function getHourString(time: Date) {
  const date = new Date(time);
  const hours = date.getHours();
  if (hours < 10) {
    return `0${hours}`;
  } else {
    return hours;
  }
}


export function getMinuteString(time: Date) {
  const date = new Date(time);
  const minutes = date.getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  } else {
    return minutes;
  }
}

export function tempConverter(k: number){
  const converter = k - 273.15;
  return Math.round(converter);
};