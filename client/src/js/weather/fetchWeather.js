import axios from 'axios';
import renderWeather from './renderWeather';

const fetchWeather = () => {
  const getLatLng = async position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ad3ce5cf700eefbe4eecc86bd0c2f60c`;

    try {
      const res = await axios.get(weatherURL);
      const currentWeather = res.data;
      console.log(currentWeather);
      renderWeather(currentWeather);
    } catch (err) {
      console.error(err);
    }
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLatLng);
  }
};

export default fetchWeather;