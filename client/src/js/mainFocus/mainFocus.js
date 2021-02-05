import renderTime from './renderTime';
import fetchMainfocus from './fetchMainfocus';
import addMainfocus from './addMainfocus';
import deleteMainfocus from './deleteMainfocus';
import toggleMainfocus from './toggleMainfocus';

export default () => {
  renderTime();
  fetchMainfocus();
  addMainfocus();
  deleteMainfocus();
  toggleMainfocus();
};