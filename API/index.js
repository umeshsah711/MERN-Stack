// print in console
console.log("hello")
console.error("this is error")
console.warn("this is warning")
console.info("this is info")

/** Variable: let, const, var */
// Syntax: let/const/var <var_name> = <value>

var age = 20;
var age = 30;
console.log(age);

let marks = 30;
marks = 40;
marks = 50;
console.log(marks);

const address = "KTM"
console.log(address);

/** Never use var */

/** Data types
 * 1. String: "Ram"
 * 2. Number: 50, 50.5
 * 3. Boolean: true, false
 * 4. Object: {key: value}
 * 5. Array: [12,15,16]
 */

const studentName = "Umesh Sah"; // String
const faculty = "IT";
const gpa = 3.5; // Number
const isPass = true; // Boolean

console.log(studentName, faculty, gpa, isPass);

// Object, key -> value pair
const details = {
    name: "Umesh Sah",
    gpa: 3.5,
    isPass: true,
    address:{
        city: "KTM",
        province: "Bagmati",
    },
}

console.log(details);

// Array: list
const grade = [3.2, 4, 3];
const test = [
    212,
    "hello",
    true,
    false,
    {class: 10, faculty: "IT"},
    [23, 4, "world"],
];

console.log(test);
console.log(grade[0]);
console.log(test[1]);