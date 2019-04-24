export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as todoAPIUtil from '../util/todo_api_util';

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  } 
};

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  }
};

export const fetchTodos = () => (dispatch, getState) => {
  return todoAPIUtil.fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = todo => dispatch => {
  return todoAPIUtil.createTodo(todo)
    .then(newtodo => dispatch(receiveTodo(newtodo)))
};


