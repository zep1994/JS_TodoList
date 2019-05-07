function newItem() {
     let li = document.createElement("li")
     let inputValue = document.getElementById("todoInput").value 
     let node = document.createTextNode(inputValue)
     li.appendChild(node)
     if (inputValue === '') {
          alert("you must write something")
     } else {
          document.getElementById("myList").appendChild(li)
     }
     document.getElementById("myTodo").value = ""
}