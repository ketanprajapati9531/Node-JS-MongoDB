//Asynchronous 


const fs= require("fs");
fs.writeFile('read3.txt',"today is awesome day!",
                            (err) => {
                                console.log("file created");
                                console.log(err);
                            });

