//create simple API in node js
const fs=require("fs");
const http = require("http");
const server=http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("home sides");
    }else if(req.url = "/about"){
        res.end("aboutUs sides");
    }else if(req.url = "/contact"){
        res.end("contactUs sides");
    }else if(req.url = "/userApi"){
        fs.readFile('${__dirname}/UserApi/userApi.json', "utf-8", (err,data)=>{
                console.log(data);
                const objData = JSON.parse(data);
                res.end(objData);
        })
    }else{
        res.writeHead(404, { "content-type": "text/html"});
        res.end("<h1>404 error pages. Page doesn't exist</h1>")
    }
});
server.listen(6010,"127.0.0.1",()=>{
    console.log("listening to the port");
});