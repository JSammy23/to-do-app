import { toDate, isToday, isThisWeek, subDays, format, compareAsc } from 'date-fns'
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


    return { tasks, addTask, removeTask, newTask }
}

const projectList = []


//Handle default project
const defaultProject = Project('Default')
projectList.push(defaultProject)
defaultProject.newTask({
    taskName: 'Mow the yard',
    dueDate: format(new Date(2023, 0, 27), 'MM/dd/yyyy'),
    note: 'Rain expected Thursday',
    priority: 'normal'
})

console.log(defaultProject)






export default Project;
export { projectList }
