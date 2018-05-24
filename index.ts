export default (waitingTime: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), waitingTime);
  });
}
