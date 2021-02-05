export default () => {
  // DOM
  const $mainView = document.querySelector('.main-view');
  const $backgroundInfo = document.querySelector('.background-info');

  $backgroundInfo.addEventListener('mouseover', () => {
    setTimeout(() => {
      $mainView.style.opacity = 0;
      $mainView.style.transition = 'all 1s';
    }, 3000);
  });

  $backgroundInfo.addEventListener('mouseout', () => {
    $mainView.style.opacity = 1;
    $mainView.style.transition = 'all 1s';
  });
};