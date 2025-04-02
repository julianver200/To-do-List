let addTaskButton = document.getElementById("addTask");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");//Parent Ul
let addBtn = document.getElementById("addTask");
let deleteAllBtn = document.getElementById("deleteAll");
let counter = document.getElementById("count1");

addBtn.addEventListener("click", addTask);

function addTask(){

    let taskText = taskInput.value;

    if(taskText.trim() === "" ){
        alert("Task cannot be empty!");
    }else{
        let taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value ="";
        taskCounter();
    }

}

function createTaskElement(taskText) {
    let li = document.createElement("li");
    //checkButton
    let checked = document.createElement("input");
    checked.type = "checkbox";
    li.appendChild(checked);
    //Task Inputted
    let taskTextNode = document.createElement("span");
    taskTextNode.textContent = taskText;
    taskTextNode.classList.add("task-text");
    li.appendChild(taskTextNode);

    //Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        taskCounter();
    });
    li.appendChild(deleteBtn);
    //Lower Delete All
    deleteAllBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let tasks = taskList.querySelectorAll("li");
        tasks.forEach(task => {
            let checkbox = task.querySelector("input[type='checkbox']");
            if (checkbox && checkbox.checked) {
                task.remove();
                taskCounter();
            }
        });
    });

    // For Styling
    

    return li;
    
}

function taskCounter() {
    let tasks = taskList.querySelectorAll("li");
    counter.textContent = tasks.length;
}








