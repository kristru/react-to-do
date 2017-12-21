import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <li>
      <button onClickCapture={this.props.deleteTodo}>Delete</button>
      <span>{this.props.description}</span>
      </li>
    );
  }
}

export default ToDo;
