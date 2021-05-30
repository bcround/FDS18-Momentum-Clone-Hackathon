import axios from 'axios';
import renderMainfocus from './renderMainfocus';

export default () => {
  // DOM
  const $mainFocus = document.querySelector('.main-focus');
  const $maintodoList = document.querySelector('.main-todo-list');
  const $closeBtn = document.querySelector('.main-todo-close-btn');

  const removeMainfocus = async () => {
    const res = await axios.delete('http://localhost:9000/focus');
    renderMainfocus(res.data);
    $mainFocus.classList.add('is-active');
    $maintodoList.classList.remove('is-active');
  };

  $closeBtn.addEventListener('click', removeMainfocus);
};