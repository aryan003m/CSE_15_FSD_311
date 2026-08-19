// console.log("hello world");
// console.log(3*4);
// console.log(5%2);
// console.log("this is a simple javascript");
// console.error("this is an error message");
// console.warn("this is a warig meassage");
// console.info("this an info message");
// console.debug("this is a debug message");
// console.log(process.platform);
// console.log(global.Lnumber);
// globalThis.Lnumber =  "51";
// console.log(global.Lnumber);
/* -----------eXIT EVENT-------------  */
// process.on('exit', function(){})
// const{EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('lunch', ()=>{
//     console.log('Welcome');
// });
// eventEmitter.emit('lunch');
// console.log("hello")
// console.log("mavi")
// import 'xyz.js'

// const shyam = require("./xyz");
// console.log("hello",shyam);

const os = require("os");
console.log("free memory",os.freemem());
console.log("platform",os.platform());
console.log("release",os.release());
console.log("total memory",os.totalmem);
console.log("CPU Info",os.cpus());
console.log("HOme Directory",os.homedir());
console.log("home name",os.hostname());