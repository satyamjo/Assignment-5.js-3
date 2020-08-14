// selectors

var todoInput = document.querySelector('.todo_input');
var todoButton = document.querySelector('.todo_btn');
var todoList = document.querySelector('.todo_list');

// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// Functions

function addTodo(event) {
    // Prevent form from submitting

    event.preventDefault();

    // Todo Div

    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creat li

    var newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    //  check Mark Button

    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"><i>';
    completedButton.classList.add("complete_btn");
    todoDiv.appendChild(completedButton);

    //  check delete Button

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"><i>';
    deleteButton.classList.add("delete_btn");
    todoDiv.appendChild(deleteButton);

    // append to list

    todoList.appendChild(todoDiv);

    // clear to do input

    todoInput.value = "";
}

function deleteCheck(e) {
    var item = e.target;
    // delete todo

    if (item.classList[0] === "delete_btn") {
        var todo = item.parentElement;
        todo.remove();
    }

    // check mark
    if (item.classList[0] === "complete_btn") {
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}