import { toDate, isToday, isThisWeek, subDays, format, compareAsc, parseISO } from 'date-fns'
import Task from './task'

const Project = (name) => {
    let projectName = name
    const tasks = []

    const newTask = taskDetails => {
        const freshTask = Task(taskDetails)
        tasks.push(freshTask)
    } 

    const addTask = task => {
        tasks.push(task)
    }

    const removeTask = name => {
        tasks.splice(tasks.findIndex(task => task.taskName === name), 1)
    }


    return { tasks, addTask, removeTask, newTask, projectName }
}

const projectList = []


//Handle default project
const defaultProject = Project('Default')
projectList.push(defaultProject)
defaultProject.newTask({
    taskName: 'Mow the yard',
    dueDate: new Date(2023, 0, 27),
    note: 'Rain expected Thursday',
    priority: 'normal'
})

defaultProject.newTask({
    taskName: 'Testing a really long title to see if I need to use flex wrap on my title for taskName',
    dueDate: new Date(2023, 0, 30),
    note: 'Where will I display the note?',
    priority: 'normal'
})

const testProj = Project('Test')
projectList.push(testProj)
testProj.newTask({
    taskName: 'Clean the garage',
    dueDate: new Date(2023, 0, 31),
    note: 'First week of Feb will be colder',
    priority: 'low'
})

// Gather all tasks into single array
const grabTasks = []
const allTasks = []
projectList.forEach(item => {
    grabTasks.push(item.tasks)
})
console.log(grabTasks)
for (let i = 0; i < grabTasks.length; i++) {
    for (let j = 0; j < grabTasks[i].length; j++) {
        allTasks.push(grabTasks[i][j])
    }
}
console.log(allTasks)

const getTodaysTasks = () => {
    const todaysTasks = allTasks.filter(task => isToday(task.dueDate))
    return todaysTasks
}




export default Project;
export { projectList, allTasks, todaysTasks }
