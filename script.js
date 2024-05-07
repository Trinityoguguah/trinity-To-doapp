var todoInput = document.querySelector("input");
var pending = document.querySelector(".pending");
var todoContainer = document.querySelector(".show-todo-container");
var todo = "";
var todos = [];

refresh();

function refresh() {
  getPending();
  showTodo();
}

function addTodo() {
  todo = todoInput.value;
  todos.push(todo);
  todoInput.value = "";
  refresh();
}

function clearTodo() {
  todo = "";
  todoInput.value = "";
  todos = [];
  refresh();
}

function deleteTodo(id) {
  todos.splice(id, 1);
  refresh();
}

function getPending() {
  pending.textContent = todos.length;
}

function showTodo() {
  todoContainer.innerHTML = "";
  todos.forEach((todo, id) => {
    return (todoContainer.innerHTML += ` <div class="show-todo">
        <h2 class="todo">${todo}</h2>
        <button class="deleteBtn" onclick="deleteTodo(${id})">D</button>
      </div>`);
  });
}
