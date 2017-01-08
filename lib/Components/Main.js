import React from 'react';
import DailyList from './DailyList';
import IdeaInput from './IdeaInput';
import filterTasks from './helpers/filterTasks';
import SearchBar from './SearchBar';
import Login from './helpers/Login';
import firebase, { signIn, signOut } from '../firebase';


export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTasks: '',
      tasks: [],
      user: null,
    }
  }

  componentDidMount() {
  firebase.database().ref('tasks').on('value', (snapshot) => {
    let tasksFromFirebase = this.createArray(snapshot.val())
    this.setState({ tasks: tasksFromFirebase })
  })
}

  createArray(object) {
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

  saveNewTask(task) {
    task['key'] = Date.now();
    task['type'] = '🛠';
    task['completed'] = false;
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks })
    firebase.database().ref('tasks').push(Object.assign(task, { id: Date.now(),
        type: task['type'],
        completed: task['completed'],
    }));
  }

  handleSearch(searchTasks){
    this.setState({
      searchTasks
    })
  }

  typeCycler(type, index, task) {
    let newArr = this.state.tasks;
     switch(type){
       case '🛠':
         newArr[index].type = '🕓';
         this.setState({ tasks: newArr});
         break;
       case '🕓':
         newArr[index].type = '✏️';
         this.setState({ tasks: newArr});
         break;
       case '✏️':
         newArr[index].type = '🛠';
         this.setState({ tasks: newArr });
         break;
     }
  }

  toggleComplete(status, index){
    let newArr = this.state.tasks;
    switch(status){
      case false:
        newArr[index].completed = true;
        this.setState({tasks: newArr});
        break;
      case true:
        newArr[index].completed = false;
        this.setState({tasks: newArr});
        break;
    }
  }

  render() {
    if (!this.state.user) {
      return (
    <div>
    Please Login
    <Login
      authorize={signIn}
      setUser=
      { (userFromFireBase) => {
        this.setState({
      user: userFromFireBase.user
        }); }} text="login"
  />
    </div>
  );
    }
    return (
      <div>
        <h1>Daily Bullet</h1>
        <h2> Welcome {this.state.user.email} </h2>
        <IdeaInput
          saveNewTask = {this.saveNewTask.bind(this)}
        />
        <SearchBar searchTasks={this.handleSearch.bind(this)}/>
        <DailyList
          tasks={filterTasks(this.state.tasks, this.state.searchTasks)}
          typeCycler = {this.typeCycler.bind(this)}
          toggleComplete = {this.toggleComplete.bind(this)}
        />
      </div>
    );
  }
}
