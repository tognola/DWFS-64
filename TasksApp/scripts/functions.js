function drawTasks(){ // HOISTING
    taskList.innerHTML = '';
    taskManager.tasks.forEach(
        task => {
            let item = document.createElement("li");
            let text = document.createTextNode(task.id+ ". " +task.text)
            let btnDelete = document.createElement("button")
            btnDelete.textContent = "Eliminar";
            btnDelete.addEventListener("click", () => {
                deleteTask(task.id)
            })

            let btnEdit = document.createElement("button")
            btnEdit.textContent = "Editar";
            btnEdit.addEventListener("click", () => {
                editTask(task.id)
            })

            item.appendChild(text);
            item.appendChild(btnEdit);
            item.appendChild(btnDelete);
            taskList.appendChild(item)
        }
    )
}

function deleteTask(id){
    taskManager.removeTask(id);
    drawTasks();
}

function addTask(){
    if(taskManager.isEditing){
        taskManager.taskToEdit.text = inputTask.value;
        taskManager.editTask(taskManager.taskToEdit)
        btnNewTask.textContent = "Agregar";
        taskManager.isEditing = false;
    } else {
        if(inputTask.value != ""){
            let newTask = new Task(inputTask.value);
            
            taskManager.addTask(newTask)           
        }
    }

    drawTasks();
    inputTask.value = "";
    btnNewTask.disabled = true;
   
    console.log(taskManager.tasks)
}

function editTask(id){
    let index = taskManager.tasks.findIndex(
        task => task.id == id
    ) 
    inputTask.value = taskManager.tasks[index].text;
    btnNewTask.textContent = "Guardar cambios";
    btnNewTask.disabled = false;
    taskManager.isEditing = true;
    taskManager.taskToEdit = taskManager.tasks[index];
}

