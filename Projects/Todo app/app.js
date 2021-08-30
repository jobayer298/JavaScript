//selector
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector("#todo-button")
const todoList = document.querySelector(".todo-list")

//event listener
todoButton.addEventListener("click" , addTodo)
todoList.addEventListener("click",deleteItem)

//function
function addTodo(event){
    event.preventDefault()
    if(todoInput.value == ""){
        alert("put value")
    }else{
            // creating to div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    //creat list
    const list = document.createElement("li");
    list.classList.add("todo-item")
    list.innerText = todoInput.value
    todoDiv.appendChild(list)

    //create check button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("completed-button")
    todoDiv.appendChild(completedButton)

    //create trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-button")
    todoDiv.appendChild(trashButton)

    //append to child
    todoList.appendChild(todoDiv)

    //clear input
    todoInput.value = "";
    }

}


function deleteItem(event){
    const item = event.target;

    if(item.classList[0] === "trash-button"){
        const todo = item.parentElement;
        todo.remove()
    }
    if(item.classList[0] === "completed-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
