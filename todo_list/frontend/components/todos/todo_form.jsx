import React from 'react';
import uniqueId from '../../util/unique_id'

class TodoForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  updateBody(e){
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTodo(this.state).then(
      () => this.setState = {
      title: "",
      body: ""
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input 
            type="text"
            id='title'
            value={this.state.title}
            onChange={this.updateTitle}/>
        </label>
        <label>Body:
          <input
            type="text"
            id='body'
            value={this.state.body}
            onChange={this.updateBody} />
        </label>
        <input type="submit" value="Add Todo"/>
      </form>
    );
  }
}

export default TodoForm