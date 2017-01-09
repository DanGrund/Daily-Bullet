import React from 'react';
import firebase from '../firebase';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSubTask: {value: '', key: Date.now()},
      sublist:[],
    };
  }

  handleChange(e){
    let subTask = this.state.newSubTask
    subTask.value = e.target.value
    this.setState({newSubTask: subTask})
  }

  handleSave(){
    let taskArray = this.state.sublist
    taskArray.push(this.state.newSubTask)
    this.setState({sublist: taskArray, newSubTask: {value: '', key: Date.now()} })
    this.props.addSubList(this.props.firebaseId, this.state.sublist)
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


              <input
                className="sub-list-input"
                value={this.state.newSubTask.value}
                onChange={(e) => this.handleChange(e)}
                ></input>
                <button
                  className="sub-list-submit-btn"
                  onClick={() => this.handleSave()}
                  >submit</button>
                <ul id="sub-list">
                  {this.props.sublist.map((task, index) => {
                    return<li id="sub-list-li" key={task.key}>
                      {task.value}<button onClick={()=>this.props.deleteSubTask(this.props.firebaseId, index)}>delete</button>
                    </li>
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
          onClick={()=>this.props.deleteTask(this.props.firebaseId)}
        >delete</button>
      </li>
      </div>
    );
  }
}
