import React from 'react';

const TodoListItem = props => {
  return <li key={props.todo.id.toString()}>{props.todo.title} - <br></br> {props.todo.body}</li>
}

export default TodoListItem;