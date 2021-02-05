import axios from 'axios';
import renderMainfocus from './renderMainfocus';

export default () => {
  const $mainInput = document.querySelector('.main-focus-input');
  const $mainFocus = document.querySelector('.main-focus');
  const $maintodoList = document.querySelector('.main-todo-list');
  const addMainfocus = async e => {
    if (e.key !== 'Enter') return;

    const res = await axios.post('http://localhost:9000/focus', {
      focus: $mainInput.value
    });

    renderMainfocus(res.data);
    $mainFocus.classList.remove('is-active');
    $maintodoList.classList.add('is-active');
    $mainInput.value = '';
  };

  $mainInput.addEventListener('keyup', addMainfocus);
};