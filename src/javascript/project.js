import { toDate, isToday, isThisWeek } from 'date-fns'
import Task, { taskMap } from './task'



// Set active project
var activeProject = undefined;
function setActiveProject(projectName) {
    activeProject = projectName
    console.log(activeProject)
}


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
};


// Gather projects into map
const projectMap = new Map()
const addProjectToMap = project => {
    if (project.projectName === '') return
    const name = project.projectName
    projectMap.set(`${name}`, project)
}


// Gather all tasks into single array
const allTasks = []
function grabTasks () {
    allTasks.length = 0;
    for (let value of taskMap.values()) {
        allTasks.push(value)
    }
}


// Gather all Tasks due Today
const todaysTasks = allTasks.filter(task => isToday(task.dueDate))

// Gather all tasks due this week
const weeklyTasks = allTasks.filter(task => isThisWeek(task.dueDate))
    





export default Project;
export { projectMap, allTasks, todaysTasks, weeklyTasks, grabTasks, activeProject, setActiveProject, addProjectToMap }
