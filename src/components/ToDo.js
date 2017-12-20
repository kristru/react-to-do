import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <li>
      <button onClick={this.deleteTodo}>Delete</button>
      <span>{this.props.description}</span>
      </li>
    );
  }
}

export default ToDo;
