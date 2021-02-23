function drawTasks(){ // HOISTING
    taskList.innerHTML = '';
    tasks.forEach(
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
    tasks = tasks.filter(
        task => {
            return task.id != id;
        }
    )
    drawTasks();
}

function addTask(){
    let newTask = inputTask.value;
    if(newTask != ""){
        tasks.push({
            id: tasks[tasks.length-1].id + 1,
            text: newTask
        })
        drawTasks();

        inputTask.value = "";
        btnNewTask.disabled = true;
    
    }
    console.log(tasks)
}

function editTask(id){
    let index = tasks.findIndex(
        task => task.id == id
    )

    console.log()
    

    inputTask.value = tasks[index].text;
    
}

