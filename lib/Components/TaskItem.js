import React from 'react';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <li className = "taskItem">
        <button
          onClick = {() => this.props.typeCycler(this.props.type, this.props.index)}
        >
          {this.props.type}
        </button>
          {this.props.value}
        <button>
          complete
        </button>
      </li>
    );
  }
}
