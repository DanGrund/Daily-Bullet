import React from 'react';

export default class IdeaInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newTask: '',
    }
  }

  handleChange(e){
    this.setState({newTask: e.target.value})
  }

  handleSave(){
    this.props.saveNewTask(this.state);
    this.setState({newTask: ''})
  }

  render(){
    return(
      <div>
        <input
          value={this.state.newTask}
          onChange={(e) => this.handleChange(e)}
          placeholder="write down yo' task"
        ></input>

        <button
          disabled={!this.state.newTask}
          onClick={()=> this.handleSave()}>Save Item</button>
      </div>
    )
  }
}
