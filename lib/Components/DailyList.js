import React from 'react';

const DailyList = ({tasks, typeCycler, markComplete}) => {

  return(
    <div>
      <ul>
        {tasks.map((tasks, index)=> {
          return
          <li className = "taskItem" key={tasks.key}>
            <button
              onClick = {()=>typeCycler(tasks.type, index)}
            >
              {tasks.type}
            </button>
              {tasks.newTask}
            <button
              onClick = {(e)=>markComplete(e)}
            >
              complete
            </button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default DailyList;
