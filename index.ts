export default (waitingTime: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), waitingTime);
  });
}
