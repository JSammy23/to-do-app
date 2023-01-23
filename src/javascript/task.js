const newTask = (name) => {
    let taskName = name
    let note = ""
    let dueDate = ''
    let completed = false
    let priority = 'normal';

    return {
        taskName, note, dueDate, completed, priority
    }
    
    // return {
    //     get name() {
    //         return taskName;
    //     },

    //     get note() {
    //         return note;
    //     },

    //     get dueDate() {
    //         return dueDate;
    //     },

    //     get completed() {
    //         return completed;
    //     },
        
    //     get priority() {
    //         return priority;
    //     },

    //     set taskName(name) {
    //         return taskName = name;
    //     },

    //     set writeNote(desc) {
    //         note = desc;
    //     },

    //     set date(date) {
    //         return dueDate = date
    //     },

    //     set done(status) {
    //         return completed = status
    //     },

    //     set priority(status) {
    //         return priority = status;
    //     }

    // }

}

export default newTask