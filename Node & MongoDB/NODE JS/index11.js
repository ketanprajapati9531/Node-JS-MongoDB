//Path module provides utilities for working with file and directory paths
//It can be accessed using:-


const path = require("path");
const filename = path.basename('/C:\Users\HP\Desktop\NODE JS\index2.js');
console.log(filename);


/*
const path = require('path');
const directories = path.dirname('/C:\Users\HP\Desktop\NODE JS\index2.js');
console.log(directories);
*/

/*
const path = require('path');
//Return the delimiter:
console.log(path.delimiter);
*/

/*
const path = require('path');
const x = path.normalize('C:\Users\HP\Desktop\NODE JS\index2.js');

console.log(x);
*/

/*
Path
Windows vs. POSIX
path.basename(path[, ext])
path.delimiter
path.dirname(path)
path.extname(path)
path.format(pathObject)
path.isAbsolute(path)
path.join([...paths])
path.normalize(path)
path.parse(path)
path.posix
path.relative(from, to)
path.resolve([...paths])
path.sep
path.toNamespacedPath(path)
path.win32
*/
