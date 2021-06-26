function generate_settings() {

    Vue.component('settings_menu_vue', {
        template: `
            <div class="outer-container">
                <div class="add_subjects">Add Subjects</div>
                <div class="container">
                    <div class="inner-container-background">
                        <div class="inner-container">
                            <input type="text" class="text-input" placeholder="Search for companies...">
                            <button class="search_button" type="submit" onclick="addTodo()">Go</button>
                            <button class="clear_button" type="submit" onclick="clearStorage()">Clear</button>
                        </div>
                    </div>
                </div>
                <div class="subject_list">You have chosen the following subjects:</div>
                <div class="text-container">
                    <ul class="text-list"></ul>
                </div>
                <div class="close-and-search-container">
                    <button class="close" onclick="closeSettings()">Close</button>
                    <button class="search" onclick="submitSettings()">Search</button>
                </div>
            </div>`
    })

    new Vue({
        el: '#settings_menu_vue'
    })



const todoInput = document.querySelector('.text-input');
const todoButton = document.querySelector('.search_button');
const clearButton = document.querySelector('.clear_button');
const todoList = document.querySelector('.text-list');

document.addEventListener('DOMContentLoaded', getTodos); //EventListener wenn Seite lädt
clearButton.addEventListener('click', clearStorage);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
    //prevent form from submitting (page refreshing)
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add Todo to local storage
    saveLocalTodos(todoInput.value);
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

function deleteCheck(e) {
    const item = e.target;
    //Delete TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend",
    function () { //remove wird erst ausgelöst, nachdem Animation abgespielt wurde
            todo.remove();
        })
    }
}

function saveLocalTodos(todo) {
    let todos;
    //Check if I already have a thing in there
    if (localStorage.getItem("checkboxes") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("checkboxes"));
    }
    todos.push(todo);
    localStorage.setItem("checkboxes", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    //Check if I already have a thing in there
    if (localStorage.getItem("checkboxes") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("checkboxes"));
    }
    todos.forEach(function (todo) {
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

function removeLocalTodos(todo) {
    let todos;
    //Check if I already have a thing in there
    if (localStorage.getItem("checkboxes") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("checkboxes"));
    }
    const todoIndex = todo.children[0]
    .innerText; //todoIndex = String! aus dem Array der gelöscht werden soll (.innerText holt den String raus) 
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("checkboxes", JSON.stringify(todos));
}

function clearStorage() {
    var checkboxes = document.getElementsByClassName("trash-btn");
    for(checkbox of checkboxes){
        checkbox.click();
    }
}



    /*

        var settings_menu = document.getElementById("settings_menu");
        settings_menu.classList.add("form-popup");

        var form_container = document.createElement("DIV");
        form_container.classList.add("form-container")
        settings_menu.appendChild(form_container);

        var form = document.createElement("FORM");
        form_container.appendChild(form);

        var checkbox_input = document.createElement("INPUT");
        checkbox_input.type = "text";
        checkbox_input.classList.add("todo-input");
        form.appendChild(checkbox_input);

        var add_checkbox_btn = document.createElement("BUTTON");
        add_checkbox_btn.classList.add("todo-button");
        add_checkbox_btn.type = "submit";
        add_checkbox_btn.onclick = "add_Checkbox()";
        form.appendChild(add_checkbox_btn);

        var add_checkbox_img = document.createElement("I");
        add_checkbox_img.classList.add("fas");
        add_checkbox_img.classList.add("fa-plus-square");
        add_checkbox_btn.appendChild(add_checkbox_img);

        var checkbox_container = document.createElement("DIV");
        checkbox_container.classList.add("todo-container");
        settings_menu.appendChild(checkbox_container);

        var checkbox_list = document.createElement("UL");
        checkbox_list.classList.add("todo-list")
        checkbox_container.appendChild(checkbox_list);

        var settings_btn_container = document.createElement("DIV");
        settings_btn_container.classList.add("selector-buttons");
        settings_menu.appendChild(settings_btn_container);

        var settings_cancel_btn = document.createElement("BUTTON");
        settings_cancel_btn.type = "button";
        settings_cancel_btn.classList.add("btn");
        settings_cancel_btn.classList.add("cancel");
        settings_cancel_btn.addEventListener("click", closeSettings);
        settings_cancel_btn.innerHTML = "Close";
        settings_btn_container.appendChild(settings_cancel_btn);

        var settings_submit_btn = document.createElement("BUTTON");
        settings_submit_btn.type = "button";
        settings_submit_btn.addEventListener("click", function () {
            window.location.reload(true);
        });
        settings_submit_btn.classList.add("btn");
        settings_submit_btn.innerHTML = "Search";
        settings_btn_container.appendChild(settings_submit_btn);


        const searchfield_input = document.querySelector('.todo-input');
        const add_searched_entry_button = document.querySelector('.todo-button');
        const searched_entry_list = document.querySelector('.todo-list');

        document.addEventListener('DOMContentLoaded', load_checkboxes); //EventListener wenn Seite lädt
        add_searched_entry_button.addEventListener('click', add_Checkbox);
        searched_entry_list.addEventListener('click', delete_Checkbox);

        */
}





// function add_Checkbox(event) {

//     const searchfield_input = document.querySelector('.todo-input');
//     const searched_entry_list = document.querySelector('.todo-list');

//     //prevent form from submitting (page refreshing)
//     event.preventDefault();
//     const checkbox_container = document.createElement('div');
//     checkbox_container.classList.add('todo');
//     const new_checkbox = document.createElement('li');
//     new_checkbox.innerText = searchfield_input.value;
//     new_checkbox.classList.add('todo-item');
//     checkbox_container.appendChild(new_checkbox);
//     //Add Todo to local storage
//     cache_Checkboxes(searchfield_input.value);
//     //Delete Button
//     const trashButton = document.createElement('button');
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add("trash-btn");
//     checkbox_container.appendChild(trashButton);
//     //Append to Child
//     searched_entry_list.appendChild(checkbox_container);
//     //Clear Todo Input Value
//     searchfield_input.value = "";
// }

// function delete_Checkbox(cb) {
//     const checkbox_target = cb.target;
//     //Delete TODO
//     if (checkbox_target.classList[0] === "trash-btn") {
//         const checkbox = checkbox_target.parentElement;
//         //Animation
//         checkbox.classList.add("fall");
//         remove_cached_checkboxes(checkbox);
//         checkbox.addEventListener("transitionend", function () { //remove wird erst ausgelöst, nachdem Animation abgespielt wurde
//             checkbox.remove();
//         })
//     }
//     //Check Mark
//     if (checkbox_target.classList[0] === "complete-btn") {
//         const checkbox = checkbox_target.parentElement;
//         checkbox.classList.toggle("completed");
//     }
// }

// function cache_Checkboxes(cb) {
//     let checkboxes;
//     //Check if entries are already in localStorage
//     if (localStorage.getItem("checkboxes") === null) {
//         checkboxes = [];
//     } else {
//         checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
//     }
//     checkboxes.push(cb);
//     localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
// }

// function load_checkboxes() {
//     const searched_entry_list = document.querySelector('.todo-list');
//     let checkboxes;
//     //Check if entries are already in localStorage
//     if (localStorage.getItem("checkboxes") === null) {
//         checkboxes = [];
//     } else {
//         checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
//     }
//     checkboxes.forEach(function (checkbox) {
//         //Todo DIV
//         const checkbox_container = document.createElement('div');
//         checkbox_container.classList.add('todo');
//         //Create LI
//         const new_checkbox = document.createElement('li');
//         new_checkbox.innerText = checkbox;
//         new_checkbox.classList.add('todo-item');
//         checkbox_container.appendChild(new_checkbox);
//         //Delete Button
//         const trashButton = document.createElement('button');
//         trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//         trashButton.classList.add("trash-btn");
//         checkbox_container.appendChild(trashButton);
//         //Append to Child
//         searched_entry_list.appendChild(checkbox_container);
//     });
// }

// function remove_cached_checkboxes(checkbox) {

//     let checkboxes;
//     //Check if entries are already in localStorage
//     if (localStorage.getItem("checkboxes") === null) {
//         checkboxes = [];
//     } else {
//         checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
//     }
//     const checkboxIndex = checkbox.children[0].innerText; //todoIndex = String! aus dem Array der gelöscht werden soll (.innerText holt den String raus) 
//     checkboxes.splice(checkboxes.indexOf(checkboxIndex), 1);
//     localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
// }