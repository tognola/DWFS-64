const inputTask = document.getElementById("inputTask");
const btnNewTask = document.getElementById("btnNewTask");
const taskList = document.getElementById("taskList")
const btnSaveTasks = document.getElementById("btnSaveTasks");

btnNewTask.disabled = true;

let tasks = JSON.parse( localStorage.getItem("tasks") );
drawTasks();

btnNewTask.addEventListener('click', addTask)

inputTask.addEventListener("keyup", () =>{    
    btnNewTask.disabled = inputTask.value == "" ? true : false;
})

btnSaveTasks.addEventListener("click", () =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
})