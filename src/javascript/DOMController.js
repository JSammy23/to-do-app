import { projectList, allTasks, todaysTasks, weeklyTasks, gatherTasks } from "./project"
import addIcon from '../assets/icons/plus-circle.png'
import { openForm } from "./handleForms";

let activeProject = undefined;

// Set active project
const setActiveProject = (projectName) => {
    activeProject = projectName
    console.log(activeProject)
}


const displayProjects = () => {
    const projectsDisplay = document.querySelector('.projects')
    projectList.forEach(item => {
        createTile(item.projectName)
    });
};

// Create project tile in sidebar
const createTile = (projectName) => {
    const projectsDisplay = document.querySelector('.projects')
    const tile = document.createElement('div')
    tile.classList.add('tile')
    const name = document.createElement('h2')
    name.textContent = projectName
    tile.appendChild(name)
    projectsDisplay.appendChild(tile)
    // This puts listeners on dynamic elements
    tile.addEventListener('click', (event) => {
        refreshDOM()
        displayTasks(event.target.textContent)
        setActiveProject(event.target.textContent)
    })

    return tile;
};

// Handle all tasks tile
const handleAllTaskListener = (() => {
    const allTasksTile = document.getElementById('allTasks')
    allTasksTile.addEventListener('click', (event) => {
        refreshDOM()
        displayAllTasks()
        setActiveProject(event.target.textContent)
    })
})();


const displayAllTasks = () => {
    for (let i = 0; i < allTasks.length; i++) {
        createCard(allTasks[i])
    }
};

// Handle today's tasks tile
const handleTodaysTaskListener = (() => {
    const todaysTaskTile = document.getElementById('todaysTasks')
    todaysTaskTile.addEventListener('click', (event) => {
        refreshDOM()
        displayTodaysTasks()
    })
})();

const displayTodaysTasks = () => {
    for (let i = 0; i < todaysTasks.length; i++) {
        createCard(todaysTasks[i])
    }
};

// Handle this week's tasks tile
const handleWeeklyTask = (() => {
    const thisWeek = document.getElementById('thisWeek')
    thisWeek.addEventListener('click', (event) => {
        refreshDOM()
        displayWeeklyTasks()
    })
})();

const displayWeeklyTasks = () => {
    for (let i = 0; i < weeklyTasks.length; i++) {
        createCard(weeklyTasks[i])
    }
};




const displayTasks = (projectName) => {
    const project = projectList.find(item => item.projectName === projectName)
    //For loop through target project task array items and createCard()
    for (let i = 0; i < project.tasks.length; i++){
        createCard(project.tasks[i])
    }
};


const createCard = (task) => {
    const body = document.getElementById('mainBody')
    const card = document.createElement('div')
    card.classList.add('card')
    // Handle title // Title & note need to be in same div
    const titleDiv = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = task.taskName
    if (task.completed === true) {
        title.classList.add('checked')
    }
    titleDiv.appendChild(title)

    // Handle complete button
    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.id = task.taskName
    checkBox.classList.add('roundBox')
    if (task.completed === true) {
        checkBox.checked = true
    } else if (task.completed === false) {
        checkBox.checked = false
    }
    listenForTaskCompletion(checkBox)

    // Handle note
    const note = document.createElement('p')
    note.classList.add('note')
    note.textContent = task.note
    titleDiv.appendChild(note)

    // Handle edit button
    const editBtn = document.createElement('button')
    editBtn.classList.add('taskEdit')
    const dotsSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const dotsPath = document.createElementNS("http://www.w3.org/2000/svg", 'path')

    dotsSvg.setAttribute('width', '25px')
    dotsSvg.setAttribute('viewBox', '0 0 24 24')
    dotsSvg.setAttribute('fill', 'white')
    dotsPath.setAttribute('d', 'M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z')

    dotsSvg.appendChild(dotsPath)
    editBtn.appendChild(dotsSvg)
    // TODO: listenForEditTask(editBtn)


    // Append card in order 
    card.appendChild(checkBox)
    card.appendChild(titleDiv)
    card.appendChild(editBtn)
    body.appendChild(card)
};

// Create add button in sidebar
// TO DO: Change color to match theme
const createAddBtn = (() => {
    // Create buttom
    const controls = document.querySelector('.sideBarControls')
    const addBtn = document.createElement('button')
    const icon = document.createElement('img')
    icon.src = addIcon
    icon.setAttribute('width', '92px')
    
    addBtn.appendChild(icon)
    controls.appendChild(addBtn)

    // Add event listener
    addBtn.addEventListener('click', openForm)

    
})()

const refreshDOM = () => {
    const body = document.getElementById('mainBody')
    body.textContent = ''
    gatherTasks()
}

// Listen for completed task
const listenForTaskCompletion = (button) => {
    button.addEventListener('click', (event) => {
        const task = allTasks.find(task => task.taskName === event.target.id)
        if (task.completed === false) {
            task.completed = true
        } else if (task.completed === true) {
            task.completed = false
        }
        console.log(task)
    })
}

displayProjects();


export {  activeProject, refreshDOM, displayTasks, displayAllTasks }