function generate_SettingsBtn() {
    var settingsBtn = document.getElementById("settings_btn");

    var new_settingsBtn = document.createElement("BUTTON");
    new_settingsBtn.classList.add("button");
    settingsBtn.parentNode.replaceChild(new_settingsBtn, settingsBtn);

    var new_settingsBtn_img_container = document.createElement("DIV");
    new_settingsBtn_img_container.classList.add("button__icon")
    new_settingsBtn.appendChild(openFormBtn_img_container);
    var new_settingsBtn_img = document.createElement("I");
    new_settingsBtn.classList.add("fas fa-sliders-h");
    new_settingsBtn_img_container.appendChild(openFormBtn_img);
}

function generate_settings() {

    var settings_menu = document.getElementById("settings_menu");

    var new_settings_menu = document.createElement("DIV");
    new_settings_menu.classList.add("form-popup");
    settings_menu.parentNode.replaceChild(new_settings_menu, settings_menu);

    var form_container = document.createElement("DIV");
    form_container.classList.add("form-container")
    new_settings_menu.appendChild(form_container);

    var form = document.createElement("FORM");
    form_container.appendChild(form);

    var checkbox_input = document.createElement("INPUT");
    checkbox_input.type = "text";
    checkbox_input.classList.add("todo-input");
    form_container.appendChild(checkbox_input);

    var add_checkbox_btn = document.createElement("BUTTON");
    add_checkbox_btn.classList.add("todo-button");
    add_checkbox_btn.type = "submit";
    add_checkbox_btn.onclick = "add_Checkbox()";

    var add_checkbox_img = document.createElement("I");
    add_checkbox_img.classList.add("fas fa-plus-square");
    add_checkbox_btn.appendChild(add_checkbox_img);

    var checkbox_container = document.createElement("DIV");
    checkbox_container.classList.add("todo-container");
    new_settings_menu.appendChild(checkbox_container);

    var checkbox_list = document.createElement("UL");
    checkbox_list.classList.add("todo-list")
    checkbox_container.appendChild(checkbox_list);

    var settings_btn_container = document.createElement("DIV");
    settings_btn_container.classList.add("selector-buttons");

    var settings_cancel_btn = document.createElement("BUTTON");
    settings_cancel_btn.type = "button";
    settings_cancel_btn.classList.add("btn cancel");
    settings_cancel_btn.onclick = "closeForm()";
    settings_cancel_btn.innerHTML = "Close";
    settings_btn_container.appendChild(settings_cancel_btn);

    var settings_submit_btn = document.createElement("BUTTON");
    settings_submit_btn.type = "button";
    settings_submit_btn.classList.add("btn");
    settings_submit_btn.innerHTML("Search");
    settings_btn_container.appendChild(settings_submit_btn);

}



/*

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