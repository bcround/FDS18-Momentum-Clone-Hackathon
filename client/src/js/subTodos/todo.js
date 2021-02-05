import getTodos from './getTodos';
import showTodo from './showTodo';
import addTodo from './addTodo';
import removeTodo from './removeTodo';

const allTodos = () => {
  getTodos();
  showTodo();
  addTodo();
  removeTodo();
};

export default allTodos;
