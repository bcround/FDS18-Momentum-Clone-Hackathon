import axios from 'axios';
import renderBackground from './renderbackground';

const accessKey = 'kwo6xgTBJqbOMSYSQz1Zo_QRSn3DIxaHLScftTUTNww';
const collectionId = '27627403';

const getBackgroundImage = async () => {
  try {
    const res = await axios.get(`https://api.unsplash.com/photos/random/?collections=${collectionId}
  &q=99&fm=jpg&crop=entropy&w=2048&cs=tinysrgb&fit=max&client_id=${accessKey}`);
    console.log(res.data);
    renderBackground(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default getBackgroundImage;
