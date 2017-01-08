import React from 'react';
import TaskItem from './TaskItem';

const DailyList = ({tasks, typeCycler, markComplete, toggleComplete}) => {
  return(
    <div className = "journalEntry">
    <ul>
    {tasks.map((task, index) => {
      return <TaskItem key={task.key} {...task} index={index} typeCycler={typeCycler} toggleComplete={toggleComplete}/>;
    })}
    </ul>
    </div>
  )
}

export default DailyList;
