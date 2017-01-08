import React from 'react';
import DailyList from './DailyList';
import IdeaInput from './IdeaInput';
import filterTasks from './helpers/filterTasks';
import SearchBar from './SearchBar';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTasks: '',
      tasks: [],
    }
  }

  saveNewTask(task){
    task['key'] = Date.now();
    task['type'] = '🛠';
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks })
  }

  handleSearch(searchTasks){
    this.setState({
      searchTasks
    })
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
        <SearchBar searchTasks={this.handleSearch.bind(this)}/>
        <DailyList
          tasks={filterTasks(this.state.tasks, this.state.searchTasks)}
          typeCycler = {this.typeCycler.bind(this)}
          markComplete = {this.markComplete}
        />
      </div>
    );
  }
}
