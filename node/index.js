// const fs = require("fs");

// const{square} = require("./utils.js");

import fs from "fs";
import myfunction from "./utils.js";

//Non blocking operation
fs.readFile("../test.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

console.log("Hello World");

const name = "Ram";

console.log(`hello ${name}`);

// const result = square(5);
// console.log(result);

myfunction();