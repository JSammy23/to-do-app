import { allTasks, projectList, todaysTasks, weeklyTasks } from "./project"
import Task from "./task"
import { activeProject, refreshDOM, displayTasks } from "./DOMController"
import { isToday, isThisWeek } from "date-fns"

const taskFormObjects = []

const handleForm = (() => {
    const taskForm = document.getElementById('taskForm')
    taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const taskData = Object.fromEntries(formData)
    
    taskFormObjects.push(taskData)
    addNewTask(taskData)

    closeForm()
    taskForm.reset()
    
})
})() 

const addNewTask = taskData => {
    const newTask = Task(taskData)
    const date = new Date(taskData.dueDate.replace(/-/g, '\/'))
    if (activeProject === 'All Tasks' || activeProject === undefined) {
        allTasks.push(newTask)
        // console.log('Fired first if')
    } else if ((activeProject !== 'All Tasks' || activeProject !== undefined)) {
        const currentProject = projectList.find(item => item.projectName === activeProject)
        currentProject.tasks.push(newTask)
        console.log(currentProject.tasks)
        refreshDOM()
        displayTasks(activeProject)
        // console.log('Fired second if')
    }
    if (isToday(date)){
        todaysTasks.push(newTask)
    }
    if (isThisWeek(date)) {
        weeklyTasks.push(newTask)
    }
}



const openForm = () => {
    document.querySelector('.taskForm').style.display = 'block'
};

const closeForm = () => {
    document.querySelector('.taskForm').style.display = 'none'
};

// console.log(taskFormObjects)
export { openForm, closeForm } 