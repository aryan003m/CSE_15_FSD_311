// const math = require("./maths.js");
// console.log(math.add.sum(54,33));
// console.log(math.subt.sub(3,5));

const EventEmitter = require("events");
const myEmitter = new EventEmitter();
//Event Listner

myEmitter.on("click", ()=>{
    console.log("Button Clicked");
});
// Trigger the event
myEmitter.emit("click");