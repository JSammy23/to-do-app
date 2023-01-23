import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

const newProject = (name) => {
    const tasks = []

    const addTask = taskName => {
        tasks.push(taskName)
    }


    return { tasks, addTask }
}

export default newProject;