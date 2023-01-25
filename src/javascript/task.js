

const Task = (taskDetails) => {
    let taskName = taskDetails.taskName
    let note = taskDetails.note
    let dueDate = taskDetails.dueDate
    let completed = false
    let priority = taskDetails.priority;

    const add = () => {
        // handle form? 
    }

    return {
        taskName, note, dueDate, completed, priority
    }
    
    
}



export default Task
