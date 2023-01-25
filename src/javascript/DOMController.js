import { projectList } from "./project"


const openForm = () => {
    document.querySelector('.taskForm').style.display = 'block'
}

const closeForm = () => {
    document.querySelector('.taskForm').style.display = 'none'
}

const displayProjects = () => {
    const projectsDisplay = document.querySelector('.projects')
    projectList.forEach(item => {
        console.log(item.projectName)
    });
}

displayProjects()


export { openForm, closeForm, displayProjects }