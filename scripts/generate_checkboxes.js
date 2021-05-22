function generate_checkboxes(){
    var openFormBtn = document.createElement("BUTTON");
    openFormBtn.classList.add("button");
    
}

/*
<button type="button" class="button" onclick="openForm()">
        <div class="button__icon">
            <i class="fas fa-sliders-h"></i>
        </div>
      </button>

    <div class="form-popup" id="myForm" style="display: none;">
            <div class="form-container">
            <form>
                <input type="text" class="todo-input">
                <button class="todo-button" type="submit" onclick="add_Checkbox()">
                    <i class="fas fa-plus-square"></i>
                </button>
            </form>
            <div class="todo-container">
                <ul class="todo-list"></ul>
            </div>
        <div class="selector-buttons">
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        <button type="submit" class="btn">Search</button>
        </div>
    </div>
      </div>
*/







const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo');

document.addEventListener('DOMContentLoaded', load_checkboxes); //EventListener wenn Seite lädt
todoButton.addEventListener('click', add_Checkbox);
todoList.addEventListener('click', delete_Checkbox);
// filterOption.addEventListener('click', filterTodo);

function add_Checkbox(event) {
    //prevent form from submitting (page refreshing)
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add Todo to local storage
    cache_Checkboxes(todoInput.value);
    //Delete Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to Child
    todoList.appendChild(todoDiv);
    //Clear Todo Input Value
    todoInput.value = "";
}

function delete_Checkbox(checkbox) {
    const cb = checkbox.target;
    //Delete TODO
    if (cb.classList[0] === "trash-btn") {
        const todo = cb.parentElement;
        //Animation
        todo.classList.add("fall");
        remove_cached_checkboxes(todo);
        todo.addEventListener("transitionend", function () { //remove wird erst ausgelöst, nachdem Animation abgespielt wurde
            todo.remove();
        })
    }
    //Check Mark
    if (cb.classList[0] === "complete-btn") {
        const todo = cb.parentElement;
        todo.classList.toggle("completed");
    }
}

function cache_Checkboxes(todo) {
    let checkboxes;
    //Check if I already have a thing in there
    if (localStorage.getItem("checkboxes") === null) {
        checkboxes = [];
    } else {
        checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
    }
    checkboxes.push(todo);
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
}

function load_checkboxes() {
    let checkboxes;
    //Check if I already have a thing in there
    if (localStorage.getItem("checkboxes") === null) {
        checkboxes = [];
    } else {
        checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
    }
    checkboxes.forEach(function (todo) {
        //Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Delete Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //Append to Child
        todoList.appendChild(todoDiv);
    });
}

function remove_cached_checkboxes(todo) {
    let checkboxes;
    //Check if I already have a thing in there
    if (localStorage.getItem("checkboxes") === null) {
        checkboxes = [];
    } else {
        checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
    }
    const todoIndex = todo.children[0].innerText; //todoIndex = String! aus dem Array der gelöscht werden soll (.innerText holt den String raus) 
    checkboxes.splice(checkboxes.indexOf(todoIndex), 1);
    localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
}