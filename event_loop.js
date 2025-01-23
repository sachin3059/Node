const fs = require('fs');
const a = 100;

setImmediate (() => console.log("set Immediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./README.md", "utf-8", () => console.log("file reading cb"));

setTimeout(() => console.log("setTimeout"), 0);

process.nextTick(() => console.log("process nextTick"));

function printA(){
    console.log("a : " , a);
}

printA();
console.log("last line of the file");

