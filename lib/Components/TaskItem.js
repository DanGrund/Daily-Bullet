import React from 'react';

export default class TaskItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <li className = "taskItem">
        <button
          // onClick = {()=>typeCycler(tasks.type, index)}
        >
          {this.props.type}
        </button>
          {this.props.value}
        <button>
          complete
        </button>
      </li>
    )
  }
}
