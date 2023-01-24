import { toDate, isToday, isThisWeek, subDays } from 'date-fns'
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


const projectList = (() => {
    const list = [];

    const add = project => {
        list.push(project)
    }

    const newProject = name => {
        let newProj = Project(name)
        list.push(newProj)
    }

    return { list, add, newProject };
})();




export default Project;
export { projectList }
