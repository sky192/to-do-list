//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todolist")

// event listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkremove)


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

function checkremove(e) {
    const classList = [...e.target.classList]
    const todo = document.querySelector(".todo")
    if(classList[1] === "fa-trash-alt") {
        todo.remove()
    } else if (classList[1] === "fa-check-square") {
        todo.classList.toggle("completed")
    }
}