const inputTask = document.getElementById("inputTask");
const btnNewTask = document.getElementById("btnNewTask");
const taskList = document.getElementById("taskList")

btnNewTask.disabled = true;

taskManager = new TaskManager();
console.log(taskManager.tasks)

drawTasks();

btnNewTask.addEventListener('click', addTask)

inputTask.addEventListener("keyup", () =>{    
    btnNewTask.disabled = inputTask.value == "" ? true : false;
})