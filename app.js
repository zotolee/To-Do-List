//Selectors
const todoButton = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoButton.addEventListener("click", addTodo);
//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //creating div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creating LI element.
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey yo';
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    // creating check BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    <i class="fa-solid fa-check"></i>

    // creating delete BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to todolist class
    todoList.appendChild(todoDiv);

}