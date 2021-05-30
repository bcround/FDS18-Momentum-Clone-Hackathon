import getTodos from './getTodos';
import showTodo from './showTodo';
import addTodo from './addTodo';
import removeTodo from './removeTodo';
import toggleTodo from './toggleTodo';

const allTodos = () => {
  getTodos();
  showTodo();
  addTodo();
  removeTodo();
  toggleTodo();
};

export default allTodos;
