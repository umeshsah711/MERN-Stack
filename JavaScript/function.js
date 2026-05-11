/**
 * Finction: Perform specific task
 * 
 * Syntax
 * function <functionName>(params?) {
    //code
 }
 */

function square(value){
    console.log("square:", value * value);
 }
square(5);
square(6);
square(7);


function greet(name){
    console.log("Hello", name);
}
greet("Ram");
greet("Hari");


function sum(value1, value2){
    console.log(value1 + value2);
}
sum(45,55);


function sumReturn(value1, value2){
    const result = value1 + value2
    return result;
}
const addedResult = sumReturn(6,5);
console.log(addedResult);
square(addedResult)

