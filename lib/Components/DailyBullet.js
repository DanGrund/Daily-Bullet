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
    this.state.tasks.push(task)
    this.setState({tasks: this.state.tasks })
  }

  render() {
    return (
      <div>
        <IdeaInput
          saveNewTask = {this.saveNewTask.bind(this)}
        />
        <DailyList
          tasks = {this.state.tasks}
        />
      </div>
    );
  }
}
