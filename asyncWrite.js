var fs = require('fs')
var data = 'Test'
var str = "this is a new string"
// Blocking
fs.writeFileSync("write.txt", str)
console.log("write to file")

// Non-blocking
fs.writeFile("write3.txt", data, (e) => {
    if (e) {
        console.log(e)
    }
    console.log("after writting to file")
})
console.log("Async Coding")