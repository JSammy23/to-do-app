const Task = (name) => {
    let taskName = name
    let note = ""
    let dueDate = ''
    let completed = false
    let priority = 'normal';

    return {
        taskName, note, dueDate, completed, priority
    }
    
    
}

export default Task