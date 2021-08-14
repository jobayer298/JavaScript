function number(num){
    console.log(num);
    let newNum = num - 1
    if(newNum > 0){
        number(newNum);
    }
}
number(5)


function fact(num){
    if(num < 0){
        return -1
    }else if(num == 0){
        return 1
    }else{
        return (num * fact(num - 1));
    }
}
console.log(fact(5));


//with loop



var sum = 1
for(let i = 1; i<6;i++){
    sum *= i
}
console.log(sum);