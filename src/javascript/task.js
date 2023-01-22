const newTask = (name) => {
    let taskName = name
    let note = ""
    let dueDate = ''
    let completed = false
    let priority = 'normal';

    
    
    return {
        get name() {
            return taskName;
        },

        get note() {
            return note;
        },

        get dueDate() {
            return dueDate;
        },

        get completed() {
            return completed;
        },
        
        get priority() {
            return priority;
        },

        set taskName(name) {
            return taskName = name
        }

    }

}

export default newTask