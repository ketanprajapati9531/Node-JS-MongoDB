//CRUD OPERATION Synchronous way...
//modules       which program you want to run erase comment from their.


//create new folder


const fs=require("fs");
fs.mkdirSync("MKdir");



//read file
/*
const fs = require("fs");
const buf_data =fs.readFileSync("read.txt");
console.log(buf_data);
org_data = buf_data.toString();
console.log(org_data);
*/

//update added new data   
/*
const fs=require("fs");
fs.appendFileSync("read.txt", "let's Go Start Now!");  //Data added
*/

/*
const fs = require("fs");
fs.renameSync("read.txt","readwrite.txt");
*/

/*
const fs = require("fs");
fs.renameSync("readwrite.txt","read.txt");
*/


//Delete

const fs = require("fs");
fs.unlinkSync("delete.txt");
