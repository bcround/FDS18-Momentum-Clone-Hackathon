import axios from 'axios';
import nameEdit from './nameEdit';

export default () => {
  const $userNameInput = document.querySelector('.greeting-username-input');
  const postName = async e => {
    if (e.key !== 'Enter') {
      $userNameInput.setAttribute('size', $userNameInput.value.length);
      if (!$userNameInput.value.length) {
        $userNameInput.setAttribute('size', 1);
      }
      return;
    }

    const res = await axios.post('http://localhost:9000/name', {
      name: $userNameInput.value
    });
    nameEdit(res.data);
  };
  $userNameInput.addEventListener('keyup', postName);
};