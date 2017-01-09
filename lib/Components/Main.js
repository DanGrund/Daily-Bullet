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
    firebase.auth().onAuthStateChanged(user => {
      this.loadTheThings(user);
    })
  }

  loadTheThings(user){
    this.setState({ user });
    firebase.database().ref(user.uid).on('value', (snapshot) => {
      let tasksFromFirebase = this.createTaskArray(snapshot.val())
      this.setState({ tasks: tasksFromFirebase })
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

  saveNewTask(task) {
    let user = (this.state.user.uid)
    task['key'] = Date.now();
    task['type'] = '⚫️';
    task['completed'] = false;
    task['sublist']= [{value: '', key:'placeholder'}];
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks })
    firebase.database().ref(user).push(Object.assign(task, { id: Date.now(),
        type: task['type'],
        completed: task['completed'],
    }));
  }

  handleSearch(searchTasks){
    this.setState({
      searchTasks
    })
  }

  typeCycler(type, index) {
    let user = (this.state.user.uid)
    let newArr = this.state.tasks;
     switch(type){
       case '⚫️':
         firebase.database().ref(user).child(newArr[index].firebaseId).update({type: '🔘'});
         break;
       case '🔘':
         firebase.database().ref(user).child(newArr[index].firebaseId).update({type: '➖'});
         break;
       case '➖':
         firebase.database().ref(user).child(newArr[index].firebaseId).update({type: '⚫️'});
         break;
     }
  }

  toggleComplete(status, index){
    let user = (this.state.user.uid)
    let newArr = this.state.tasks;
    switch(status){
      case false:
        firebase.database().ref(user).child(newArr[index].firebaseId).update({completed: true});
        break;
      case true:
      firebase.database().ref(user).child(newArr[index].firebaseId).update({completed: false});
      break;
    }
  }

  deleteTask(key) {
    let user = (this.state.user.uid)
    firebase.database().ref(user).child(key).remove();
  }

  addSubList(key, array){
    let user = (this.state.user.uid)
    firebase.database().ref(user).child(key).update({sublist: array})
  }

  render() {
    if (!this.state.user) {
      return (
        <div className = "login">
        Please Log In
          <Login
            signIn={signIn}
          />
        </div>
      );
    }

    return (
      <div>
        <h1>Daily Bullet.</h1>
        <h2> Welcome {this.state.user.displayName}   <button
            className='btn-signout'
            onClick={ () => signOut() }
          >Sign Out</button></h2>

        <IdeaInput
          saveNewTask = {this.saveNewTask.bind(this)}
        />
        <SearchBar searchTasks={this.handleSearch.bind(this)}/>
        <DailyList
          tasks={filterTasks(this.state.tasks, this.state.searchTasks)}
          typeCycler = {this.typeCycler.bind(this)}
          toggleComplete = {this.toggleComplete.bind(this)}
          deleteTask = {this.deleteTask.bind(this)}
          addSubList = {this.addSubList.bind(this)}
        />
      </div>
    );
  }
}


//I KNOW THIS SHOULDN'T BE IN OUR PRODUCTION CODE I JUST WANT TO REF IT LATER
// populateSubList(key){
//   let user = (this.state.user.uid)
//   firebase.database().ref(user+'/'+key+'/sublist/').on('value', (snapshot) => {
//     let tasksFromFirebase = this.createTaskArray(snapshot.val())
//     console.log(tasksFromFirebase)
//     return tasksFromFirebase
//   })
// }
