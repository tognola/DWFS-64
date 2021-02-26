class Task{
    id;
    text;
    description;
    limit_date;
    finished_date;
    state;

    constructor(text, description, limit_date){
        this.text = text;
        this.description = description;
        this.limit_date = limit_date;
    }
}

class TaskManager{
    tasks; // Array de tasks;
    isEditing;
    taskToEdit;

    constructor(){
        this.readTasks()
        if( this.tasks == null){
            this.tasks = [];
        }
        this.isEditing = false;
    }

    readTasks() {
        // Leer tasks del localStorage
        this.tasks = JSON.parse( localStorage.getItem("tasks") );
    }

    saveTasks() {
        // Guardar tasks en el localStorage
        localStorage.setItem("tasks", JSON.stringify(this.tasks) );
    }

    addTask(task) {
        if(this.tasks.length > 0){
            task.id = this.tasks[this.tasks.length-1].id + 1;
        } else {
            task.id = 1;
        }
        this.tasks.push(task);
        this.saveTasks();
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(
                        task => {
                            return task.id != id;
                        }
                    );
        this.saveTasks();
    }

    editTask(newTask) {
        // id: 1, ... info nueva ...
        let index = this.tasks.findIndex( task => task.id == newTask.id);
        this.tasks[index] = newTask;
        this.saveTasks();
    }
}

