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

    return tile;
};

const handleTileListeners = () => {
    const projectTiles = document.querySelectorAll('.tile')
    projectTiles.forEach(tile => {
        tile.addEventListener('click', (event) => {
            // displayTasks(event.target)
        })
    })
}

handleTileListeners()

const displayTasks = (project) => {
    // Display tasks from this.project list array
}

displayProjects()


export { openForm, closeForm, displayProjects }