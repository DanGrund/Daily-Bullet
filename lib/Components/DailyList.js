import React from 'react';
import TaskItem from './TaskItem';

const DailyList = ({tasks, typeCycler, markComplete, toggleComplete, deleteTask, addSubList, deleteSubTask, user}) => {
  return(
    <div className = "journalEntry">
    <ul>
    {tasks.map((task, index) => {
      return <TaskItem key={task.key} {...task} index={index} typeCycler={typeCycler} toggleComplete={toggleComplete} deleteTask={deleteTask} addSubList={addSubList} deleteSubTask={deleteSubTask} user={user}/>;
    })}
    </ul>
  </div>
  )
}

export default DailyList;
