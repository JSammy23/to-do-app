

const Task = (taskDetails) => {
    let taskName = taskDetails.taskName;
    let note = taskDetails.note;
    let dueDate = taskDetails.dueDate;
    let completed = false;
    let priority = taskDetails.priority;
    let project;

    return {
        taskName, note, dueDate, completed, priority, project
    }
    
    
}

const taskMap = new Map()

const addTaskToMap = task => {
    if (task.taskName === '') return
    const name = task.taskName
    taskMap.set(`${name}`, task)
}

const taskList = taskMap.values()

const taskItem = Task({
    taskName: 'Mow the yard',
    note: 'Rain forcasted Thursday',
    dueDate: new Date(2023, 0, 31),
    priority: 'normal'
})

const taskItem2 = Task({
    taskName: 'Finish homework',
    note: 'Algebra & history',
    dueDate: new Date(2023, 0, 31),
    priority: 'normal'
})


addTaskToMap(taskItem)
addTaskToMap(taskItem2)




export default Task
export { taskMap, addTaskToMap, taskList }
