import React from 'react';

const DailyList = ({tasks, typeCycler, markComplete}) => {
  console.log(tasks)
  return(
    <div className = "journalEntry">
    <ul>
    {tasks.map((task, index)=> {
      return (
        <li className = "taskItem" key={task.key}>
        <button className = "cyclerButton"
        onClick = {()=>typeCycler(task.type, index)}
        >
        {task.type}
        </button>
        <p className = "taskValue">{task.value}</p>
        <button className = "completeButton"
        onClick = {(e)=>markComplete(e)}
        >
        complete
        </button>
        </li>
      )
    })}
    </ul>
    </div>
  )
}

export default DailyList;
