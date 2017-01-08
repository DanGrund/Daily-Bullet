import React from 'react';

export default class IdeaInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newTask: {value: ''},
    }
  }

  handleChange(e){
    let task = this.state.newTask
    task.value = e.target.value
    this.setState({newTask: task})
  }

  handleSave(){
    this.props.saveNewTask(this.state.newTask);
    this.setState({newTask: {value: ''}})
  }

  render(){
    return(
      <div>
        <input className = "journalInput"
          value={this.state.newTask.value}
          onChange={(e) => this.handleChange(e)}
          placeholder="write down yo' task"
        ></input>

        <button
          className = "saveButton"
          disabled={!this.state.newTask}
          onClick={()=> this.handleSave()}>Save</button>
      </div>
    )
  }
}
