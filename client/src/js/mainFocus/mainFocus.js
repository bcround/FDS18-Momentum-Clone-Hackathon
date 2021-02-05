import renderTime from './renderTime';
import fetchMainfocus from './fetchMainfocus';
import addMainfocus from './addMainfocus';
import deleteMainfocus from './deleteMainfocus';

export default () => {
  renderTime();
  fetchMainfocus();
  addMainfocus();
  deleteMainfocus();
};