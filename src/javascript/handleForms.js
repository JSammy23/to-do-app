const taskFormObjects = []

const handleForm = (() => {
    const taskForm = document.getElementById('taskForm')
    taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const data = Object.fromEntries(formData)
    // console.log(data)
    taskFormObjects.push(data)
    
})
})() 

console.log(taskFormObjects)
export { handleForm, taskFormObjects } 