let btnAdd = document.querySelector("#add")
let btnSub = document.querySelector("#sub")
let input = document.querySelector("input")

btnAdd.addEventListener("click",function(event){
    input.value = parseInt(input.value) + 1;
    event.target.style.backgroundColor = "green"
    event.target.style.color = "#fafafa"
})
btnSub.addEventListener("click",function(event){
    input.value = parseInt(input.value) - 1;
    event.target.style.backgroundColor = "red"
    event.target.style.color = "#fafafa"
})