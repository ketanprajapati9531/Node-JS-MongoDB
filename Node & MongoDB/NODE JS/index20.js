//Events module in node js
//node js has a built-in module , called "Events".
//where you can create , fire and listen for your own events.
//so carefully not Event its  --> "Events"
//remove comment for run


/*
//1. Registering for the event to be fired only one time using once.
const EventEmitter  = require("events");
const event = new EventEmitter();
event.on('sayMyName',() =>{
    console.log("your name is ketan");
});
 event.emit("sayMyName");
*/




/*
//2.Create an event emitter instance and register a couple of callbacks.
const EventEmitter  = require("events");
const event = new EventEmitter();
event.on('sayMyName',() =>{
    console.log("sirname is prajapati");
});

event.on('sayMyName',() =>{
    console.log("name is ketan");
});

event.on('sayMyName',() =>{
    console.log("father name is vipulbhai");
});

event.emit("sayMyName");
*/

//3.Registering for the event with callback parameters.
const EventEmitter  = require("events");
//const event = require("events"); OR
const event = new EventEmitter();
event.on('checkPage',(sc,msg) =>{
    console.log("status code is ${sc} and the page is ${msg}");
});
event.emit("checkPage", 200, "ok");