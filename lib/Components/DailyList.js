import React from 'react';

const DailyList = ({tasks, typeCycler, markComplete}) => {
  return(
    <div>
    <ul>
    {tasks.map((task, index)=> {
      return (
        <li className = "taskItem" key={task.key}>
        <button
        onClick = {() => typeCycler(task.type, index)}
        >
        {task.type}
        </button>
        {task.value}
        <button>
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
