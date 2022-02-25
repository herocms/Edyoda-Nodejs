// function create(data, callback) {
//     var str = "Hi this is data " + data
//     callback(str)
// }

// function logData(data) {
//     console.log(data)
// }

// create("Node is best", logData)


// ==============================
// another callback example
// ==============================

const compute = (n1, n2, callingCallback) => callingCallback(n1, n2)

const sum = (n1, n2) => n1 + n2
const product = (n1, n2) => n1 * n2

console.log(compute(12, 13, sum))
console.log(compute(12, 13, product))