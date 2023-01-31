import Project, { allTasks, projectMap, todaysTasks, weeklyTasks, grabTasks, activeProject, addProjectToMap } from "./project"
import Task, { addTaskToMap } from "./task"
import { refreshDOM, displayAllTasks, createTile, displayTasks } from "./DOMController"
import { isToday, isThisWeek } from "date-fns"

const taskFormObjects = []

const handleTaskForm = (() => {
    const taskForm = document.getElementById('taskForm')
    taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(taskForm)
    const taskData = Object.fromEntries(formData)
    
    taskFormObjects.push(taskData)
    addNewTask(taskData)
    grabTasks()
    closeTaskForm()
    taskForm.reset()
    
})
})() 

const handleProjectForm = (() => {
    const projectForm = document.getElementById('projectForm')
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const projectName = document.getElementById('projectName').value
        addNewProject(projectName)
        closeProjectForm()
        projectForm.reset()
    })
})()

const addNewTask = taskData => {
    const newTask = Task(taskData)
    const date = new Date(taskData.dueDate.replace(/-/g, '\/'))
    addTaskToMap(newTask)
    if (activeProject === 'All Tasks' || activeProject === undefined) {
        allTasks.push(newTask)
        refreshDOM()
        displayAllTasks()
        console.log('Fired first if')
        
        
    } else if ((activeProject !== 'All Tasks' || activeProject !== undefined)) {
        const currentProject = projectMap.get(`${activeProject}`)
        currentProject.tasks.push(newTask)
        newTask.project = activeProject
        console.log(currentProject.tasks)
        refreshDOM()
        displayTasks(activeProject)
        console.log('Fired second if')
    }
    if (isToday(date)){
        todaysTasks.push(newTask)
    }
    if (isThisWeek(date)) {
        weeklyTasks.push(newTask)
    }
}

const addNewProject = name => {
    const newProject = Project(name)
    addProjectToMap(newProject)
    createTile(name)
}

const listenForCloseTaskForm = (() => {
    const closeTaskBtn = document.getElementById('closeTask')
    const taskForm = document.getElementById('taskForm')
    closeTaskBtn.addEventListener('click', () => {
        closeTaskForm()
        taskForm.reset()
    })
    
})()

const listenForTaskForm = (() => {
    const newTask = document.getElementById('newTask')
    newTask.addEventListener('click', () => {
        openTaskForm()
        hideMenu()
    })
})()

const listenForProjectForm = (() => {
    const newProject = document.getElementById('newProject')
    newProject.addEventListener('click', () => {
        openProjectForm()
        hideMenu()
    })
})()

const listenForCloseProjectForm = (() => {
    const closeProject = document.getElementById('closeProject')
    const projectForm = document.getElementById('projectForm')
    closeProject.addEventListener('click', () => {
        closeProjectForm()
        projectForm.reset()
    })
})()

function dropMenu() {
    const menu = document.querySelector('.dropDownContent')
    menu.style.display = 'block'
}

function hideMenu() {
    const menu = document.querySelector('.dropDownContent')
    menu.style.display = 'none'
}


function openTaskForm() {
    document.querySelector('.taskForm').style.display = 'block'
};

function closeTaskForm() {
    document.querySelector('.taskForm').style.display = 'none'
};

function openProjectForm() {
   document.getElementById('projectFormDiv').style.display = 'block'
}

function closeProjectForm() {
    document.getElementById('projectFormDiv').style.display = 'none'
}

export { openTaskForm, closeTaskForm, dropMenu } 