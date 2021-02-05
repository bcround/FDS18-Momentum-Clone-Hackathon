export default () => {
  const $clock = document.querySelector('.clock');
  const $greetingTime = document.querySelector('.greeting-time');

  setInterval(() => {
    const today = new Date();
    const currentHour = today.getHours();
    const currentMin = today.getMinutes();
    const showHour = currentHour < 10 ? `0${currentHour}` : currentHour;
    const showMin = currentMin < 10 ? `0${currentMin}` : currentMin;

    $clock.textContent = `${showHour}:${showMin}`;

    if (currentHour < 12 && currentMin <= 59) {
      $greetingTime.textContent = ' Morning ';
    } else if (currentHour >= 12 && currentHour < 18 && currentMin <= 59) {
      $greetingTime.textContent = ' Afternoon ';
    } else if (currentHour >= 18) {
      $greetingTime.textContent = ' Evening ';
    }
  }, 1000);
};