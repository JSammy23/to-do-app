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


    return { tasks, addTask, removeTask, newTask, projectName }
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

defaultProject.newTask({
    taskName: 'Testing a really long title to see if I need to use flex wrap on my title for taskName',
    dueDate: format(new Date(2023, 0, 30), 'MM/dd/yyyy'),
    note: 'Where will I display the note?',
    priority: 'normal'
})

const testProj = Project('Test')
projectList.push(testProj)
testProj.newTask({
    taskName: 'Clean the garage',
    dueDate: format(new Date(2023, 0, 31), 'MM/dd/yyyy'),
    note: 'First week of Feb will be colder',
    priority: 'low'
})

console.log(projectList)






export default Project;
export { projectList }
