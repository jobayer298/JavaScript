// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => displayData(json))
// let displayData = (users) =>{
//     let userName = users.map(user => user.username)
//         let ul = document.querySelector("#user-list")
//     for (let i = 0; i < userName.length; i++) {
//         let user = userName[i]
//         let li = document.createElement("li")
//         li.innerText = user
//         ul.appendChild(li)
//     }
// }

document.querySelector("#btn").addEventListener("click",()=>{
  const titleValue = document.querySelector("#title").value
  const bodyValue = document.querySelector("#body").value
  if(titleValue == 0 || bodyValue == 0){
    alert("Fill up the information")
  }else{
    const post = {
    title : titleValue,
    body : bodyValue
  }
  postToServer(post)
  }
})

function postToServer(post){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


