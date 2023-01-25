import './styles.css';
import Task, {handleForm} from './javascript/task';
import { compareAsc, format } from 'date-fns'
import Project, { projectList } from './javascript/project';



//Handle default project
const firstProject = Project('Default')
projectList.push(firstProject)
firstProject.newTask({
    taskName: 'Mow the yard',
    dueDate: format(new Date(2023, 0, 27), 'MM/dd/yyyy'),
    note: 'Rain expected Thursday',
    priority: 'normal'
})

console.log(firstProject)

