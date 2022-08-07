//JSON  --javascript object notation.
//lightweight
//for storing and transporting data.
//Json is often used when data is sent from a server to a web page.

const bioData = {
    name:"ketan",
    age : 20,
    channel : "ketanstar"
};
console.log(bioData.channel);
console.log(bioData.age);
console.log(bioData.name);

//for object to json convert use this.....-->
//1st method
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// output         {"name":"ketan","age":20,"channel":"ketanstar"}
// This do not do this --> console.log(jsonData.channel);  --> undefined
//2nd mothed
const objData = JSON.parse(jsonData);
console.log(objData);

//output   { name: 'ketan', age: 20, channel: 'ketanstar' }