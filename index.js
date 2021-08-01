//?Creating 4 types of variables and printing
var intValue = 20;
var floatValue = 4.5;
var stringValue = "30";
var booleanValue = true;
console.log(intValue);
console.log(floatValue);
console.log(stringValue);
console.log(booleanValue);

//?parse the variable which holds string data to the integer and add with the variable that holds integer data and print them.
var parsing = parseInt(stringValue)
var add = parsing + intValue
console.log(add);

// Generate a random value from 10 to 20 and print them

var rand = Math.floor(Math.random() * (20-10)) + 10 
console.log(rand);
