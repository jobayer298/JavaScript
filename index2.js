// var exploreDate = new Date()
// console.log(exploreDate);

// var friend = ["Sifat", "Jobayer", "Hossain"]
// var age = [22,32,21]
// console.log(friend);
// console.log(age);

// var num = 1
// while(num<=4){
//     console.log("the number is" + num)
//     num++
// }

// var arr = [1,2,3,5]
// console.log(arr.indexOf(3));
// console.log(arr.length);
// console.log(arr.slice(3));
// console.log(arr);
// console.log(arr.splice(2));
// console.log(arr);

let n = 5; // you can take input from prompt or change the value
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

var a = -5
var b = -2
var c = -6
var d = -1
var e = 0
if(a>b && a>c && a>d && a>e){
  console.log(a);
}
else if(b>a && b>c && b>d && b>e){
  console.log(b);
}
else if(c>a && c>b && c>d && c>e){
  console.log(c);
}
else if(d>a && d>b && d>c && d>e){
  console.log(d);
}
else{
  console.log(e);
}


var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join("+"));

// var str = "abacddbec"
// function firstNonRepeated(str){
//   for(var i=0;i<str.length;i++){
//     if(str[i]!=str[i]+1){
//       console.log(str[i]);
//     }else{
//       console.log(str[i]);
//     }
//   }
// }
// firstNonRepeated()
var s = "abacddbec"
function firstNotRepeatingCharacter(s) { 
  for (let i = 0; i < s.length; i++) { 
    if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s
    }
  }
}
console.log(firstNotRepeatingCharacter());