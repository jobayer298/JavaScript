let n = 5; 
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

//adding item from the beginning
var arr = [2,3,4,5]
arr.splice(0,0,1)
console.log(arr)

//delete item from the beginning
var array = [1,2,3,4,5]
array.splice(0,1)
console.log(array)

var s = "abacddbec"
function firstNotRepeatingCharacter(s) { 
  for (let i = 0; i < s.length; i++) { 
    if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s
    }
  }
}
console.log(firstNotRepeatingCharacter());