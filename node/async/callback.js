// Callback: function used as a parameter
// Higher order function: function that accepta a function as a parameter

// Asynchronous programming
import fs from "fs";
const myFunction = (error, data) => {
  if (erroe) throw error;
  console.log(data);
};

function myFunction(error, data) {
  if (erroe) throw error;
  console.log(data);
}

// non-blocking (async) task
fs.readFile(
  "/node/data/data.txt",
  "utf8",
  // Callback function
  myFunction,
);

console.log("Hello World 1");
console.log("Hello World 2");

