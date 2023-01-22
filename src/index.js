import './styles.css';
import newTask from './javascript/task';


const item = newTask('Mow the yard');

console.log(item.name)
item.taskName = "Cut the Grass"
console.log(item.name)