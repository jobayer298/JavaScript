const number = [1,2,3,4,5]
// const double = []
// for(let i=0;i<number.length;i++){
//     const result = number[i]*number[i]
//     double.push(result)
// }
// console.log(double);
const result = number.map((item)=>{
    return item*item
})
console.log(result);
const filt = number.filter(item=> item *2)
console.log(filt);