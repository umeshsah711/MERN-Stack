const fs = require("fs");

//Non blocking operation
fs.readFile("../test.txt", "utf-8", (error, data) => {
    if(error) throw error;
    console.log(data);
});

console.log("Hello World")

const name = "Ram";

console.log(`hello ${name}`);