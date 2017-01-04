import React from 'react';

const TaskItem = ({ type, newTask }) => {
  return(
    <li className = "taskItem">
      <button
        // onClick = {()=>typeCycler(tasks.type, index)}
      >
        {tasks.type}
      </button>
        {tasks.newTask}
      <button>
        complete
      </button>
    </li>
  )
}
