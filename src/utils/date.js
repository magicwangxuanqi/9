const formatTime = time => {
  time = new Date(time);
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time
    .getHours()
    .toString()
    .padStart(2, 0)}:${time
    .getMinutes()
    .toString()
    .padStart(2, 0)}:${time
    .getSeconds()
    .toString()
    .padStart(2, 0)}`;
};
export default formatTime;
