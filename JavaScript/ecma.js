/**
 * 1. Template literals
 * 2. Destructuring (Array, Object)
 * 3. Spread Operator
 * 4. Array Methods
 * 5. Arrow Function
 */


const name = "Ram";
const age = 20;
const address = "KTM";

const result = "Hello my name is" + name + "and i am" + age + "years old. I live in" + address;
console.log(result);

// Template literals
const templateResult = `Hello my name is ${name} and I am ${age} years old. I live in ${address}.`
console.log(templateResult);


// Destructuring
const course = {
    title:"MERN",
    duration:"3 Months",
    instructors:"Sam",
};
console.log(course);
console.log(course.instructors);

// Object Desstructuring
const {title,duration,instructors} = course;
console.log(title);
console.log(duration);
console.log(instructors);

// Array Destructuring
const students = ["Ram", "Mohan", "Hari"];
const [std1, std2, std3] = students;
console.log(std1, std2,std3);


// Spread Operator: To copy date:(...)
const user = {
    name: "Ram",
    age: 20,
    address: "KTM",
};

const details={
    education: "BE",
    skills: "MERN",
    experience: "5 Yrs",
};

const userDetails={...user, ...details};

console.log(userDetails);



// Arrow Function
// const sum = (value1, value2) => {
//     console.log(value1 + value2);
// };

// sum(8,6);

const sum = (value1, value2) => {
    const result = value1 + value2;
    return result;
}

const sumResult = sum(5, 6);
console.log(sumResult);
