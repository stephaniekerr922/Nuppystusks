const button = document.getElementsByName('Addtask')[0];
const todoString = window.localStorage.getItem('todos');
const todoList = todoString ? JSON.parse(todoString) : [];

const addTodo = function (todoName) {
  const todo = document.createElement('li');
  const text = document.createTextNode(todoName);
  todo.appendChild(text);
  const todos = document.getElementById('todos');
  todos.appendChild(todo);
}

button.addEventListener("click", function () {
  const inputbox = document.getElementById('taskname')
  if (inputbox.value !== '') {
    addTodo(inputbox.value);
    todoList.push(inputbox.value);
    window.localStorage.setItem('todos', JSON.stringify(todoList));
    inputbox.value = '';
  } else {
    alert('You need to add a task');
  }
});
todoList.forEach(function(listItem) {
  addTodo(listItem);
})
