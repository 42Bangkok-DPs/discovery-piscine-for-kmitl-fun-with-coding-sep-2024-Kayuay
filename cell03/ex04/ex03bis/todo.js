function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}
    
function saveToCookie() {
    let todoArray = [];
    $(".todo-item").each(function () {
        todoArray.push($(this).text());
    });
    document.cookie = "todoList=" + JSON.stringify(todoArray) + "; path=/";
}


function loadFromCookie() {
    const todoList = getCookie("todoList");
    if (todoList) {
        const todos = JSON.parse(todoList);
        todos.forEach((todo) => {
            createTodoElement(todo);
        });
    }
}

function createTodoElement(todoText) {
    const todoDiv = $("<div></div>").addClass("todo-item").text(todoText);

    todoDiv.on("click", function () {
        const confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
            todoDiv.remove();
            saveToCookie();
        }
    });

    $("#ft_list").prepend(todoDiv);
}

function newTodo() {
    const todoText = prompt("Enter your new TO DO:");
    if (todoText !== null && todoText.trim() !== "") {
        createTodoElement(todoText);
        saveToCookie();
    }
}

$(document).ready(function () {
    loadFromCookie();
});
