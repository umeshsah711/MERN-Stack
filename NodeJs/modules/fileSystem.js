import { error } from "console";
import fs from "fs";

/**
 * fs: file system is a node js module for file operators, like create, read, update, delete.
 * fs operations can be done using 2 methods: asynchronous & synchronous
 * synchronous: blocking operation, wait for this operation to complete
 * asynchronous: non-blocking operation
 */

// Synchronous Method
// Read File

// const result = fs.readFileSync("data/data.txt", "utf8");
// console.log(result);

// Asynchronous Method
const result = fs.readFileSync("data/data.txt", "utf8");
fs.readFile("data/data.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

console.log("Hello");

fs.writeFile("data/data.txt", "This is a new text file.", () => {
  console.log("Data written successfully");
});
