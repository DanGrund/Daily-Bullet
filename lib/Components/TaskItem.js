import React from 'react';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <li className = "taskItem"
      >
        <button
          className="cyclerButton"
          onClick = {() => this.props.typeCycler(this.props.type, this.props.index)}
        >
          {this.props.type}
        </button>
          <p className="taskValue" className={this.props.completed ? "completed" :""}>{this.props.value}
          </p>
        <input
          type="checkbox"
          checked={this.props.completed}
          className="completeButton"
          onClick = {() => this.props.toggleComplete(this.props.completed, this.props.index)}
        ></input>
        <button
          onClick={()=>this.props.deleteTask(this.props.id)}
        >delete</button>
      </li>
    );
  }
}
