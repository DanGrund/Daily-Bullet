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

  componentDidMount(){
    let user = this.props.user.uid
    let listKey = this.props.firebaseId
    firebase.database().ref(user+'/'+listKey+'/sublist/').on('value', (snapshot) => {
      let tasksFromFirebase = this.createTaskArray(snapshot.val())
      this.setState({sublist: tasksFromFirebase || []})
    })
  }

  createTaskArray(object) {
    if (!object) {
      return []
    }
    let fireBaseKeys = Object.keys(object)
    let allFromFireBase = fireBaseKeys.map((singleKey) => {
      let singleItem = object[singleKey];
      singleItem['firebaseId'] = singleKey;
      return singleItem;
    });
    return allFromFireBase
  }

  handleChange(e){
    let subTask = this.state.newSubTask
    subTask.value = e.target.value
    this.setState({newSubTask: subTask})
  }

  handleSave(){
    this.setState({newSubTask: {value: '', key: Date.now()} })
    this.props.addSubList(this.props.firebaseId, this.state.newSubTask)
  }

  handleDelete(subtaskId){
    this.props.deleteSubTask(this.props.firebaseId, subtaskId)
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

            <div className="sub-list-container">
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
                  {this.state.sublist.map((task) => {
                    return<li id="sub-list-li" key={task.key}>
                      {task.value}<button onClick={()=>this.handleDelete(task.firebaseId)}>delete</button>
                    </li>
                  })}
                </ul>
              </div>
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
