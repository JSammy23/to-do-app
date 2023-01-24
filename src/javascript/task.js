

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

const handleForm = (() => {
    const taskForm = document.getElementById('taskForm')
    taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const data = Object.fromEntries(formData)
    console.log(data)
})
})() 

export default Task
export {handleForm}