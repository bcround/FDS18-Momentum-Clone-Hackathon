import background from './background/background';
import weather from './weather/weather';
import name from './name/name';
import allTodos from './subTodos/todo';

window.onload = () => {
  allTodos();
  weather();
  name();
  background();
};