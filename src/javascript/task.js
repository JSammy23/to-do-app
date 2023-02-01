

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

const removeTask = taskName => {
    taskMap.delete(`${taskName}`)
}

// Default tasks for development
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

// Local Storage

const tasks = []
const taskStrings = []
for (let value of taskMap.values()) {
    tasks.push(value)
}

tasks.forEach(element => {
    // JSON.stringify(element)
    taskStrings.push(element)
});

console.log(taskStrings)
window.localStorage.setItem('tasks', JSON.stringify(tasks));




export default Task
export { taskMap, addTaskToMap, removeTask }
