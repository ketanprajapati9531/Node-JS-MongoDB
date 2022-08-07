//module wrapper function

//behind the seen.....
//exports,require,module,__filename,__dirname
//behind the seen code see like this:-

(function(exports, require, module, __filename, __dirname){
    const fs= require("fs");
    const name="ketan";
    console.log(name);
    module.exports = { hgdhkjhjkfhj }
})

//bonus
//IIFE    private data
/*
An Immediately-invoked Function Expression (IIFE for friends) is a way to execute
 functions immediately, as soon as they are created.

IIFEs are very useful because they don’t pollute the global object, and they are a
 simple way to isolate variables declarations.

This is the syntax that defines an IIFE:

(function() {
   //code
})()

IIFEs can be defined with arrow functions as well:

(() => {
    //code
})()
We basically have a function defined inside parentheses, and then we append () to 
execute that function: ( function )().


(function(){
    var a = "ketan";
console.log(a);
})
*/
console.log(__dirname);
console.log(__filename);