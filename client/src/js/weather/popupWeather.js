const popupWeather = () => {
  const $weather = document.querySelector('.weather');
  const $weatherPopup = document.querySelector('.weather-popup');

  $weather.addEventListener('click', () => {
    $weatherPopup.classList.toggle('is-active');
  });
};

export default popupWeather;