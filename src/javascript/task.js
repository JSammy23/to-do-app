

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
    if (!(taskMap.has(`${name}`))) {
        taskMap.set(`${name}`, task)
    } else return
    
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
const storeTasks = () => {
    const tasks = []
    for (let value of taskMap.values()) {
        tasks.push(value)
    }
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const loadTasks = () => {
    const tasks = []
    tasks.push(JSON.parse(window.localStorage.getItem('tasks')))
    tasks.forEach(item => {
        addTaskToMap(item)
    })
}










export default Task
export { taskMap, addTaskToMap, removeTask, storeTasks, loadTasks }
