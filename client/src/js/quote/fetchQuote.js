import axios from "axios"
import renderQuote from "./renderQuote";

const fetchQuote = async () => {
  try {
    const res = await axios.get('https://goquotes-api.herokuapp.com/api/v1/random?count=30');
    console.log(res.data);
    renderQuote(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchQuote;
