import React from 'react';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSubTask: {value: '', key: Date.now()},
      subTasks:[]
    };
  }

  handleChange(e){
    let subTask = this.state.newSubTask
    subTask.value = e.target.value
    this.setState({newSubTask: subTask})
  }

  handleSave(){
    let taskArray = this.state.subTasks
    taskArray.push(this.state.newSubTask)
    this.setState({subTasks: taskArray, newSubTask: {value: '', key: Date.now()} })
  }


  render() {
    return (
      <li className = "taskItem">
        <button
          className="cyclerButton"
          onClick = {() => this.props.typeCycler(this.props.type, this.props.index)}
        >
          {this.props.type}
        </button>
          <p id="taskValue" className={this.props.completed ? "completed" :""}>{this.props.value}
          </p>
        <input
          type="checkbox"
          checked={this.props.completed}
          className="completeButton"
          onClick = {() => this.props.toggleComplete(this.props.completed, this.props.index)}
        ></input>
        <button className = "deleteButton"
          onClick={()=>this.props.deleteTask(this.props.firebaseId)}
        >delete</button>
        <input
          value={this.state.newSubTask.value}
          onChange={(e)=> this.handleChange(e)}
        ></input>
        <button
          onClick={()=> this.handleSave()}
        >submit</button>
        <ul>
          {this.state.subTasks.map((task)=>{
            return <li key={task.key}>{task.value}</li>
          })}
        </ul>
      </li>
    );
  }
}
