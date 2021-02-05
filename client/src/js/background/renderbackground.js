const renderBackground = data => {
  const $body = document.querySelector('body');
  const $location = document.querySelector('.background-info-location');
  const $photographer = document.querySelector('.background-info-photographer');

  $body.style.backgroundImage = `url(${data.urls.regular})`;
  $body.style.backgroundRepeat = 'no-repeat';
  $body.style.backgroundSize = 'cover';

  $location.textContent = data.user.name;
  $photographer.textContent = data.user.location;
};

export default renderBackground;
