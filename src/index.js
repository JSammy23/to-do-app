import './styles.css';
import { loadProjects, storeProjects, activeProject, setActiveProject, addProjectToMap } from './javascript/project';
import { displayTasks } from './javascript/DOMController';
import { loadTasks, storeTasks } from './javascript/task';


window.addEventListener('load', () => {
    setActiveProject('All Tasks')
    loadTasks()
    loadProjects()
    displayTasks(activeProject)
})

// window.addEventListener('click', (event) => {
//     if (event.target.classList.contains('save')) {
//         storeProjects()
//         storeTasks()
//     }
// })





