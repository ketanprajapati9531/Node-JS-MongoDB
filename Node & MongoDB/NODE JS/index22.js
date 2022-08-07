/*
The readable.pipe() method in a Readable Stream is used to attach a Writable stream to
the readable stream so that it consequently switches into flowing mode and then pushes
all the data that it has to the attached Writable. 

Syntax:

readable.pipe( destination, options )

Parameters: This method accept two parameters as mentioned above and described below:

destination: This parameter holds the destination of writing data.
options: This parameter holds the pipe options.'
*/
const fs=require("fs");
const http = require("http");

const server= http.createServer();

server.on("request",(req,res)=> {

const rstream = fs.createReadStream("input21.txt");
rstream.pipe(res);

});
server.listen(7890,"127.0.0.1");