import { projectMap, allTasks, todaysTasks, weeklyTasks, grabTasks, setActiveProject } from "./project"
import { dropMenu, openTaskForm, openTaskEditForm } from "./handleForms";
import { taskList, taskMap } from "./task";
import { format, add } from "date-fns";




const displayProjects = () => {
    const projectsDisplay = document.querySelector('.projects')
    for (let value of projectMap.values()) {
        createCard(value)
    }
};

// Create project tile in sidebar
const createTile = (projectName) => {
    const projectsDisplay = document.querySelector('.projects')
    const tile = document.createElement('div')
    tile.classList.add('tile')
    const name = document.createElement('h2')
    name.textContent = projectName
    tile.appendChild(name)
    tile.setAttribute('tabindex', '0')
    projectsDisplay.appendChild(tile)
    // This puts listeners on dynamic elements
    tile.addEventListener('click', (event) => {
        refreshDOM()
        displayTasks(event.target.textContent)
        setActiveProject(event.target.textContent)
    })

    return tile;
};

const displayTasks = projectName => {
    const project = projectMap.get(`${projectName}`)
    for (let i = 0; i < project.tasks.length; i++){
        createCard(project.tasks[i])
    }
};

// Handle All Tasks filter tile
const handleAllTaskListener = (() => {
    const allTasksTile = document.getElementById('allTasks')
    allTasksTile.addEventListener('click', (event) => {
        refreshDOM()
        // grabTasks()
        displayAllTasks()
        setActiveProject(event.target.textContent)
    })
})();


const displayAllTasks = () => {
    for (let value of taskMap.values()) {
        createCard(value)
    }
};

// Handle today's tasks tile
const handleTodaysTaskListener = (() => {
    const todaysTaskTile = document.getElementById('todaysTasks')
    todaysTaskTile.addEventListener('click', (event) => {
        refreshDOM()
        grabTasks()
        displayTodaysTasks()
        // setActiveProject(event.target.textContent)
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
        // setActiveProject(event.target.textContent)
    })
})();

const displayWeeklyTasks = () => {
    for (let i = 0; i < weeklyTasks.length; i++) {
        createCard(weeklyTasks[i])
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

    //Handle controls div
    const controlsDiv = document.createElement('div')
    controlsDiv.classList.add('cardControls')

    //Handle dueDate
    const dateText = document.createElement('p')
    dateText.classList.add('note')
    if (!(task.dueDate === "" || task.dueDate === undefined)) {
        const date = new Date(task.dueDate)
        const addDay = add((date), { days: 1})
        const formatDate = format((addDay), 'E MMM do')
        console.log(formatDate)
        dateText.textContent = formatDate
         

        controlsDiv.appendChild(dateText)
    }
    

    // Handle delete button
    const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const deletePath = document.createElementNS("http://www.w3.org/2000/svg", 'path')

    deleteSvg.setAttribute('width', '24px')
    deleteSvg.setAttribute('viewBox', "0 0 24 24")
    deleteSvg.setAttribute('fill', "#ffffff")
    deletePath.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z')
    deleteSvg.appendChild(deletePath)
    deleteSvg.classList.add('trashCan')

    // TODO: Add event listener to trash button

    controlsDiv.appendChild(deleteSvg)

    // Handle edit button
    const dotsSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const dotsPath = document.createElementNS("http://www.w3.org/2000/svg", 'path')

    dotsSvg.setAttribute('width', '25px')
    dotsSvg.setAttribute('viewBox', '0 0 24 24')
    dotsSvg.setAttribute('fill', 'white')
    dotsPath.setAttribute('d', 'M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z')

    dotsSvg.appendChild(dotsPath)
    dotsSvg.classList.add('taskEdit')
    dotsSvg.addEventListener('click', () => {
        openTaskEditForm(task)
    })

    
    controlsDiv.appendChild(dotsSvg)


    // Append card in order 
    card.appendChild(checkBox)
    card.appendChild(titleDiv)
    card.appendChild(controlsDiv)
    // card.appendChild(dotsSvg)
    body.appendChild(card)
};

// Create add button in sidebar
const createAddBtn = (() => {
    // Create buttom
    const controls = document.querySelector('.sideBarControls')
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    svg.classList.add('addSvg')
    svg.setAttribute('width', '65px')
    svg.setAttribute('viewbox', "0 0 56 56")
    svg.setAttribute('fill', 'blueviolet')
    path.setAttribute('d', 'M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 27.9882 39.0742 C 29.2304 39.0742 29.9804 38.2071 29.9804 36.8477 L 29.9804 29.9336 L 37.3163 29.9336 C 38.6288 29.9336 39.5429 29.2305 39.5429 27.9883 C 39.5429 26.7227 38.6757 25.9961 37.3163 25.9961 L 29.9804 25.9961 L 29.9804 18.6367 C 29.9804 17.2774 29.2304 16.4102 27.9882 16.4102 C 26.7460 16.4102 26.0429 17.3242 26.0429 18.6367 L 26.0429 25.9961 L 18.7304 25.9961 C 17.3710 25.9961 16.4804 26.7227 16.4804 27.9883 C 16.4804 29.2305 17.4179 29.9336 18.7304 29.9336 L 26.0429 29.9336 L 26.0429 36.8477 C 26.0429 38.1602 26.7460 39.0742 27.9882 39.0742 Z')
    svg.appendChild(path)
    svg.addEventListener('click', dropMenu)
    controls.appendChild(svg)
})()

const refreshDOM = () => {
    const body = document.getElementById('mainBody')
    body.textContent = ''
    grabTasks()
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
        refreshDOM()
        displayAllTasks()
        //TODO: Display seleted filter tasks
    })
}

displayProjects();

export { refreshDOM, displayAllTasks, createTile, createCard, displayTasks }