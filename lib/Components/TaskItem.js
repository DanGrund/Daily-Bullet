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
        className={this.props.completed ? "completed" :""}
      >
        <button
          className="cyclerButton"
          onClick = {() => this.props.typeCycler(this.props.type, this.props.index)}
        >
          {this.props.type}
        </button>
          <p className="taskValue">{this.props.value}</p>
        <input
          type="checkbox"
          className="completeButton"
          onClick = {() => this.props.toggleComplete(this.props.completed, this.props.index)}
        ></input>
      </li>
    );
  }
}
