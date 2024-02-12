let taskList = [];

function renderTasks() {
    let taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        let task = taskList[i];

        let taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.style.backgroundColor = i % 2 === 0 ? "darkgray" : "lightgray";
        
        let checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.onchange = function() {
            if (checkboxElement.checked) {
                taskElement.style.textDecoration = "line-through";
            } else {
                taskElement.style.textDecoration = "none";
            }
        };
        taskElement.appendChild(checkboxElement);

        let textElement = document.createElement("span");
        textElement.innerText = task;
        taskElement.appendChild(textElement);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskList.splice(i, 1);
            renderTasks();
        };
        taskElement.appendChild(deleteButton);

        taskListElement.appendChild(taskElement);
    }
}

function addTask(event) {
    event.preventDefault();
    
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    taskList.push(task);
    taskInput.value = "";

    renderTasks();
}

renderTasks();