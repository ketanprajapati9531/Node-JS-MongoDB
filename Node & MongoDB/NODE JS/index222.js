// Node.js program to demonstrate the	
// readable.pipe() method

// Accessing fs module
var fs = require("fs");

// Create a readable stream
var readable = fs.createReadStream('input21.txt');

// Create a writable stream
var writable = fs.createWriteStream('output22.txt');

// Calling pipe method
readable.pipe(writable);

console.log("Program Ended");


//when we run the data input21.txt data automatically write to output22.txt