import background from './background/background';
import weather from './weather/weather';
import name from './name/name';
import allTodos from './subTodos/todo';
import mainFocus from './mainFocus/mainFocus';

window.onload = () => {
  allTodos();
  weather();
  name();
  background();
  mainFocus();
};