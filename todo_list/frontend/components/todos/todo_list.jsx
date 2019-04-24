import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<ul>
      {this.props.todos.map(todo => {
        return <TodoListItem todo={todo} />;
      })}
      <TodoForm receiveTodo={this.props.receiveTodo} 
                createTodo={this.props.createTodo}/>
    </ul>
    )
  }

  componentDidMount(){
    this.props.fetchTodos();
  }
}

export default TodoList;