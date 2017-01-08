
const filterTasks = (tasks, searchTasks)=> {
  let newFilter = tasks.filter((task)=>{
    return task.value.indexOf(searchTasks) >= 0;
  })
  return newFilter
};

export default filterTasks
