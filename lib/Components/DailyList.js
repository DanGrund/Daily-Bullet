import React from 'react';

const DailyList = ({tasks, typeCycler, markComplete}) => {
  console.log(tasks)
  return(
    <div>
    <ul>
    {tasks.map((task, index)=> {
      return (
        <li className = "taskItem" key={task.key}>
        <button
        onClick = {()=>typeCycler(task.type, index)}
        >
        {task.type}
        </button>
        {task.value}
        <button
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
