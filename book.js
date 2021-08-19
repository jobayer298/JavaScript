const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

button.addEventListener("click",function(event){
    event.preventDefault();

    // ?basic validation
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Fill up the value")
    }else{
        const newRow = document.createElement("tr")
        //? creating new title
        const newTitle = document.createElement("td")
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)
        //? creating new Author
        const newAuthor = document.createElement("td")
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)
        //? creating new Year
        const newYear = document.createElement("td")
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)

    }
})

