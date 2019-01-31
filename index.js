let addTodo = document.getElementById('addTodo')
let inputTodo = document.getElementById('todoInput')
let listTodo = document.getElementById('todoList')

addTodo.addEventListener("click", function() {
     let text = inputTodo.value;
     inputTodo.value = ""
     let li = document.createElement('li');
     li.innerHTML = text
     let removeTodo = createElement("button");
     removeTodo.classList.add("remove-btn");
     removeTodo.innerHTML = "HTML";
     remove
     listTodo.appendChild(li);
     
})