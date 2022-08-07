//modules       which program you want to run erase comment from their.
//synchronous way..
/*
const name = "ketan";
console.log(name);
*/

/*
const fs =require("fs");
fs.writeFileSync("read.txt","welcome user!"); //autoatically create file 
*/


const fs=require("fs");
fs.appendFileSync("read.txt"," OHK Start Now!");  //Data added


/*
const fs = require("fs");
const buf_data =fs.readFileSync("read.txt");
console.log(buf_data);
org_data = buf_data.toString();
console.log(org_data);
*/

/*
const fs = require("fs");
fs.renameSync("read.txt","readwrite.txt");
*/
/*
const fs = require("fs");
fs.renameSync("readwrite.txt","read.txt");
*/