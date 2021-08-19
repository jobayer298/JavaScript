// "use strict"
// const prompt = require("prompt-sync")({sigint:true})
// var name = prompt("Enter your name : ");
// console.log(name);


// var para = document.getElementsByClassName("para")
// for(var i=0;i<para.length;i++){
//     var element = para[i]
//     console.log(element);
//     if(i%2==0){
//         element.style.backgroundColor= "red"
//     }else{
//         element.style.backgroundColor = "blue"
//     }

// }
var para = document.getElementsByClassName("head")
for(var i=0; i<para.length; i++){
    console.log(para[i]);
    var element = para[i]
    element.style.backgroundColor = "red"
    element.style.fontSize = "20px"
    element.style.color = "#fafafa"

}
var hello = document.getElementById("t1").childNodes[0] 
console.log(hello);

