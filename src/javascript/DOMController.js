import { projectList, allTasks, todaysTasks } from "./project"


const openForm = () => {
    document.querySelector('.taskForm').style.display = 'block'
};

const closeForm = () => {
    document.querySelector('.taskForm').style.display = 'none'
};

const displayProjects = () => {
    const projectsDisplay = document.querySelector('.projects')
    projectList.forEach(item => {
        createTile(item.projectName)
    });
};

const createTile = (projectName) => {
    const body = document.getElementById('mainBody')
    const projectsDisplay = document.querySelector('.projects')
    const tile = document.createElement('div')
    tile.classList.add('tile')
    const name = document.createElement('h2')
    name.textContent = projectName
    tile.appendChild(name)
    projectsDisplay.appendChild(tile)
    // This puts listeners on dynamic elements
    tile.addEventListener('click', (event) => {
        body.textContent = '' // Refresh body every click to avoid duplicates
        displayTasks(event.target.textContent)
    })

    return tile;
};


const handleAllTaskListener = (() => {
    const body = document.getElementById('mainBody')
    const allTasksTile = document.getElementById('allTasks')
    allTasksTile.addEventListener('click', (event) => {
        body.textContent = ''
        displayAllTasks()
    })
})();


const displayAllTasks = () => {
    for (let i = 0; i < allTasks.length; i++) {
        createCard(allTasks[i])
    }
};

const handleTodaysTaskListener = (() => {
    const body = document.getElementById('mainBody')
    const todaysTaskTile = document.getElementById('todaysTasks')
    todaysTaskTile.addEventListener('click', (event) => {
        body.textContent = ''
        displayTodaysTasks()
    })
})();

const displayTodaysTasks = () => {
    for (let i = 0; i < todaysTasks.length; i++) {
        createCard(todaysTasks[i])
    }
};




const displayTasks = (projectName) => {
    // Display tasks from this.project list array
    const project = projectList.find(item => item.projectName === projectName)
    //For loop through target project task array items and createCard()
    // console.log(project.tasks[0])
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
    titleDiv.appendChild(title)

    // Handle complete button
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('taskCheckMark')
    const circleSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    const circlePath = document.createElementNS("http://www.w3.org/2000/svg", 'path')

    circleSvg.setAttribute('width', '25px')
    circleSvg.setAttribute('viewBox', '0 0 24 24')
    circleSvg.setAttribute('fill', 'white')

    circlePath.setAttribute('d', 'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z')

    circleSvg.appendChild(circlePath)
    checkBtn.appendChild(circleSvg)

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


    // Append card in order 
    card.appendChild(checkBtn)
    card.appendChild(titleDiv)
    card.appendChild(editBtn)
    body.appendChild(card)
};

displayProjects();


export { openForm, closeForm, displayProjects }