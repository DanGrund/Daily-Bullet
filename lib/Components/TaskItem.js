import React from 'react';
import firebase from '../firebase';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSubTask: { value: '', key: Date.now() },
      subTasks: [],
    };
  }

  componentDidMount() {

  }

  handleChange(e) {
    const subTask = this.state.newSubTask;
    subTask.value = e.target.value;
    this.setState({ newSubTask: subTask });
  }

  handleSave() {
    const taskArray = this.state.subTasks;
    taskArray.push(this.state.newSubTask);
    this.setState({ subTasks: taskArray, newSubTask: { value: '', key: Date.now() } });
    this.props.addSubList(this.props.firebaseId, this.state.subTasks);
  }


  render() {
    return (
      <div className="container">
      <li className = "taskItem">
        <button
          className="cyclerButton"
          onClick = {() => this.props.typeCycler(this.props.type, this.props.index)}
        >
          {this.props.type}
        </button>
          <div id="taskValue" className={this.props.completed ? 'completed' :''}>
            {this.props.value}
              <p>
              <input
                className="sub-list-input"
                value={this.state.newSubTask.value}
                onChange={(e) => this.handleChange(e)}
                ></input>
                <button
                  className="sub-list-submit-btn"
                  onClick={() => this.handleSave()}
                  >submit</button>
                </p>
                <ul id="sub-list">
                  {this.state.subTasks.map((task) => {
                    return <li id="sub-list-li" key={task.key}>{task.value}</li>;
                  })}
                </ul>
          </div>
        <input
          type="checkbox"
          checked={this.props.completed}
          className="completeButton"
          onClick = {() => this.props.toggleComplete(this.props.completed, this.props.index)}
        />
        <p className='completed-text'>completed</p>
        <button className = "deleteButton"
          onClick={() => this.props.deleteTask(this.props.firebaseId)}
          >delete</button>
      </li>
      </div>
    );
  }
}
