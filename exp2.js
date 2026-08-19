// const os = require("os");
// console.log("free memory",os.freemem());
// console.log("platform",os.platform());
// console.log("release",os.release());
// console.log("total memory",os.totalmem);
// console.log("CPU Info",os.cpus());
// console.log("HOme Directory",os.homedir());
// console.log("home name",os.hostname());

const fs = require("fs");
// create
fs.writeFileSync("data.txt", "Hello Students");
// Read
console.log(fs.readFileSync("data.txt", "utf-8"));
// Update
fs.appendFileSync("data.txt", "\nWelcome to NodeJs")
// read updated data
console.log(fs.readFileSync("data.txt", "utf-8"));
// Delete
fs.unlinkSync("data.txt");
console.log("File Deleted Successfully");