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

const openForm = () => {
    document.querySelector('.taskForm').style.display = 'block'
};

const closeForm = () => {
    document.querySelector('.taskForm').style.display = 'none'
};

// console.log(taskFormObjects)
export { openForm, closeForm } 