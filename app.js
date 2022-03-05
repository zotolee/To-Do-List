//Selectors
const todoButton = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //creating div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creating LI element.
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    // creating check BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // creating delete BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to todolist class
    todoList.appendChild(todoDiv);
    // clearing todoInput value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //delete selected Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //An animation effect can be added here
        //todo.classList.add("fall");
        //todo.addEventListener("transitionend", function() {}
        //todo.remove();
        //});
        todo.remove();
    }
    // check selected Todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}