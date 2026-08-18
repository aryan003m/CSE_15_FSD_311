const EventEmitter = require("events");
const myEmitter = new EventEmitter();
//Event Listner

myEmitter.on("click", ()=>{
    console.log("Button Clicked");
});
// Trigger the event
myEmitter.emit("click");