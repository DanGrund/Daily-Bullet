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
    task['type'] = '🛠';
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks })
  }

  typeCycler(type, index){
    let newArr = this.state.tasks;
     switch(type){
       case '🛠':
         newArr[index].type = '🕓';
         this.setState({tasks: newArr});
         break;
       case '🕓':
         newArr[index].type = '✏️';
         this.setState({tasks: newArr});
         break;
       case '✏️':
         newArr[index].type = '🛠';
         this.setState({tasks: newArr});
         break;
     }
   }

  render() {
    return (
      <div>
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
