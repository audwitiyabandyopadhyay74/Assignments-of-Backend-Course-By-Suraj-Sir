//"Har Har Mahadev",


//"statSync"
//"What is statSync?"
//"statSync is also a one line command of File System of Node Js."

//"What statSync Does ?"
//"StatSync is a command of Filesystem of Node Js Which Gives information about File. Ex: path , directory , etc."
// "For Example:"
const fs = require("fs");
const obj = fs.statSync("./text.txt", { bigint: true });
console.log(obj);