import { projectList } from "./project"


const openForm = () => {
    document.querySelector('.taskForm').style.display = 'block'
};

const closeForm = () => {
    document.querySelector('.taskForm').style.display = 'none'
};

const displayProjects = () => {
    const projectsDisplay = document.querySelector('.projects')
    projectList.forEach(item => {
        console.log(item.projectName)
        createTile(item.projectName)
    });
};

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
        console.log(event.target.textContent)
        displayTasks(event.target.textContent)
    })

    return tile;
};

// This is only working on static elements
const handleTileListeners = () => {
    const projectTiles = document.querySelectorAll('.tile')
    projectTiles.forEach(tile => {
        tile.addEventListener('click', (event) => {
            // displayTasks(event.target)
            
        })
    })
}





const displayTasks = (projectName) => {
    // Display tasks from this.project list array
    const project = projectList.find(item => item.projectName === projectName)
    //For loop through target project task array items and createCard()
    // console.log(project.tasks[0])
    for (let i = 0; i < project.tasks.length; i++){
        console.log(project.tasks[i])
    }
}


// const createCard = (task)

displayProjects()


export { openForm, closeForm, displayProjects }