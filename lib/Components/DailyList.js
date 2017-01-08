import React from 'react';
import TaskItem from './TaskItem';

const DailyList = ({tasks, typeCycler, markComplete}) => {
  console.log(tasks)
  return(
    <div>
    <ul>
    {tasks.map((task, index)=> {
      return <TaskItem key={task.key} {...task} index={index} typeCycler={typeCycler}/>;
    })}
    </ul>
    </div>
  )
}

export default DailyList;
