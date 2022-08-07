
/*
Node js npm
NPM is a package manager for Node. js packages, or modules if you like. 
www.npmjs.com hosts thousands of free packages to download and use. 
The NPM program is installed on your computer when you install Node.js. 
NPM is already ready to run on your computer!
*/

//npm init <initializer> can be used to set up a new or existing npm package.
//when we write        ->   npm install chalk            node_modules -> '
//package-lock.json in folder

// Importing module
const chalk=require("chalk");

// Printing the text
console.log(chalk.red("aayush"))
console.log(chalk.red.underline("aayush"))
console.log(chalk.red.underline.bold("GFG"))
