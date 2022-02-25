// ====================================
// write file 
// ====================================
const { Console } = require('console')
var fs = require('fs')
var str = "Hi, this is our new file in node code"

// fs.writeFileSync("write.txt", str)
// console.log("write to file")





// ====================================
// read file
// ====================================

var Data = fs.readFileSync("write.txt", 'utf-8')
console.log(Data)