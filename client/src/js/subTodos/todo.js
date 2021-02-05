import getTodos from './getTodos';
import showTodo from './showTodo';
import addTodo from './addTodo';

const allTodos = () => {
  getTodos();
  showTodo();
  addTodo();
};

export default allTodos;
