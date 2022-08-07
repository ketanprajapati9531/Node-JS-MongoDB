//CRUD OPERATION  Asynchronous way...

//create
/*
const fs=require("fs");
fs.mkdir("prajapati",
    (err) =>{
    console.log("folder created");
  });
*/

//read

const fs=require("fs");
fs.readFile("read2.txt","UTF-8",(err,data)=>{
    console.log(data);
});


//update
/*
const fs= require("fs");
fs.appendFile("read.txt","i am read file text!",
                    (err)=>{
                        console.log("success..");
                    });
*/
//rename
/*
const fs = require("fs");
fs.rename("read3.txt","readed3.txt",(err)=>{
    console.log("done!");
});
*/

//delete
/*
const fs=require("fs");
fs.unlink("readed3.txt",(err)=>{
    console.log("folder deleted");
});
*/