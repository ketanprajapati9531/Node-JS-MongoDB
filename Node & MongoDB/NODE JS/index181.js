//index 18 task

//1 convert to JSON => done
//2 add in another file
//3 readfile
//4 again convert back to js obj origin
//5 console.log

const fs = require("fs");

const bioData = {
    name:"ketan",
    age : 20,
    channel : "ketanstar"
};
const jsonData  = JSON.stringify(bioData);
fs.writeFile('json18.json',"json from index181 file!",(err)=>{
        console.log("done u successfully create json from index181 file!");
});
/*
fs.readFile("json18.json","UTF-8",(err,data)=>{
    
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
*/
