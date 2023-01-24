// const Task = (name) => {
//     let taskName = name
//     let note = ""
//     let dueDate = ''
//     let completed = false
//     let priority = 'normal';

//     return {
//         taskName, note, dueDate, completed, priority
//     }
    
    
// }

const Task = (taskDetails) => {
    let taskName = taskDetails.name
    let note = taskDetails.note
    let dueDate = taskDetails.dueDate
    let completed = taskDetails.completed
    let priority = taskDetails.priority;

    return {
        taskName, note, dueDate, completed, priority
    }
    
    
}

export default Task