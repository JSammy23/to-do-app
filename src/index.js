import './styles.css';
import newTask from './javascript/task';
import { compareAsc, format } from 'date-fns'
import newProject, { projectList } from './javascript/project';



const item = newProject('item')

item.addTask(newTask('Mow the yard'))

console.log(item)

console.log(projectList)

projectList.add(item)