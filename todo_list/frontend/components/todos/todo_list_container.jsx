import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import { receiveTodo, createTodo, fetchTodos } from '../../actions/todo_actions.js';

const mapStateToProps = state => {
  return { todos: allTodos(state) };
}

const mapDispatchToProps = dispatch => {
  return { fetchTodos: todos => dispatch(fetchTodos()), 
  createTodo: todo => dispatch(createTodo(todo)),
  receiveTodo: todo => dispatch(receiveTodo(todo))}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);