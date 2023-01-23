import './styles.css';
import newTask from './javascript/task';
import { compareAsc, format } from 'date-fns'
import newProject from './javascript/project';


const list = newProject('list')

list.addTask(newTask('Mow the yard'))

console.log(list)

