//Selectors
const TodoButton = document.querySelector('.todo-btn');
const TodoInput = document.querySelector('.todo-input');
const TodoList = document.querySelector('.todo-list');

//EventListeners
TodoButton.addEventListener("click", addTodo);
//Functions
function addTodo(){
    //prevent form from submitting
    event.preventDefault();
    //creating div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //creating LI
    
}