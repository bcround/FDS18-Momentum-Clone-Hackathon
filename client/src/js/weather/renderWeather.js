const renderWeather = currentWeather => {
  // DOM
  const $weatherIcon = document.querySelector('.weather-info-icon');
  const $weatherCelsius = document.querySelector('.weather-celsius');
  const $weatherLocation = document.querySelector('.weather-location');
  const $weatherPopupLocation = document.querySelector(
    '.weather-popup-dest-location'
  );
  const $weatherPopupInfo = document.querySelector('.weather-popup-dest-info');
  const $weatherPopupIcon = document.querySelector(
    '.weather-popup-status-icon'
  );
  const $weatherPopupCelsius = document.querySelector(
    '.weather-popup-status-celsius'
  );

  const iconURL = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
  const temperature = `${Math.floor(currentWeather.main.temp)}℃`;
  const location = currentWeather.name;

  $weatherIcon.setAttribute('src', iconURL);
  $weatherCelsius.textContent = temperature;
  $weatherLocation.textContent = location;
  $weatherPopupLocation.textContent = location;
  $weatherPopupInfo.textContent = currentWeather.weather[0].main;
  $weatherPopupIcon.setAttribute('src', iconURL);
  $weatherPopupCelsius.textContent = temperature;
};

export default renderWeather;