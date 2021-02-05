import weather from './weather/weather';
import allTodos from './subTodos/todo';
import name from './name/name';

window.onload = () => {
  allTodos();
  weather();
  name();
};