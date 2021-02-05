import axios from 'axios';
import nameEdit from './nameEdit';

const fetchName = async () => {
  const res = axios.get('http://localhost:9000/name');
  nameEdit(res.data);
};

export default fetchName;