import axios from 'axios';
import renderMainfocus from './renderMainfocus';

export default async () => {
  const res = await axios.get('http://localhost:9000/focus');
  renderMainfocus(res.data);
};