import React from 'react';
import DailyList from './DailyList';
import IdeaInput from './IdeaInput';

export default class DailyBullet extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
  }

  saveNewTask(task){
    task['key'] = Date.now();
    task['type'] = '⚫️';
    console.log(this.state.tasks.length)
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks })
  }

  typeCycler(type, index){
    let newArr = this.state.tasks;
     switch(type){
       case '⚫️':
         newArr[index].type = '🔘';
         this.setState({tasks: newArr});
         break;
       case '🔘':
         newArr[index].type = '➖';
         this.setState({tasks: newArr});
         break;
       case '➖':
         newArr[index].type = '⚫️';
         this.setState({tasks: newArr});
         break;
     }
   }

   markComplete(e) {
     console.log(e.parent)
   }

  render() {
    return (
      <div>
        <h1>Daily Bullet.</h1>
        <IdeaInput 
          saveNewTask = {this.saveNewTask.bind(this)}
        />
        <DailyList
          tasks = {this.state.tasks}
          typeCycler = {this.typeCycler.bind(this)}
          markComplete = {this.markComplete}
        />
      </div>
    );
  }
}
