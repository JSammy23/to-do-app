import './styles.css';
import newTask from './javascript/task';
import { compareAsc, format } from 'date-fns'


const item = newTask('Mow the yard');



item.note = 'Rain coming Thursday'

item.dueDate = format(new Date(2023, 0, 24), 'MM/dd/yyyy')

console.log(item.dueDate)
