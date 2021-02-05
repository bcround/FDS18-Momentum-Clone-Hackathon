const nameEdit = name => {
  const $uesrNameInput = document.querySelector('.greeting-username-input');
  const $userName = document.querySelector('.greeting-username');
  const $editBtn = document.querySelector('.greeting-edit-btn');

  $uesrNameInput.classList.remove('is-active');
  $userName.classList.add('is-active');
  $editBtn.classList.add('is-active');
  $userName.textContent = name;

  $editBtn.addEventListener('click', () => {
    $uesrNameInput.classList.add('is-active');
    $userName.classList.remove('is-active');
    $editBtn.classList.remove('is-active');
  });
};

export default nameEdit;