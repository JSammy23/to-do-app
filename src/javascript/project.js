import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

const newProject = (name) => {
    let projectName = name
    const tasks = []

    const addTask = task => {
        tasks.push(task)
    }
    const removeTask = name => {
        tasks.splice(tasks.findIndex(task => task.taskName === name), 1)
    }


    return { tasks, addTask, removeTask }
}


const projectList = () => {
    const list = [];

    const addProject = project => {
        list.push(project)
    }

    return { list, addProject };
}




export default newProject;
export { projectList }
