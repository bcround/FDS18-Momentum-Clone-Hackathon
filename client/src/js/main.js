import background from './background/background';
import quote from './quote/quote';
import weather from './weather/weather';
import allTodos from './subTodos/todo';
import name from './name/name';

window.onload = () => {
  allTodos();
  weather();
  name();
  background();
  quote();
};
