
const openForm = () => {
    document.querySelector('.taskForm').style.display = 'block'
}

const closeForm = () => {
    document.querySelector('.taskForm').style.display = 'none'
}

export { openForm, closeForm }