//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todolist")

// event listener

todoButton.addEventListener("click", addTodo)

// functions
function addTodo(e) {
    e.preventDefault()
    //get todo value
    //create new todo
    //add to Dom
    //reset input
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    const newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`
    todoDiv.innerHTML = newTodo
    //append to todolist
    todoList.appendChild(todoDiv)
}