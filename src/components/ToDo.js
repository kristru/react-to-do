import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <li>
      <button onClickCapture={this.props.styleText}>Style Text</button>
      <button onClickCapture={this.props.deleteTodo}>Delete</button>
      <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
      <span id="taskDescription">{this.props.description}</span>
      </li>
    );
  }
}

export default ToDo;
