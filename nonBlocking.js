// =======================
// non-blocking function
// =======================

// console.log("I am First");
// console.log("I am Second");
// console.log("I am Third");

setTimeout(() => {
    console.log("I am First");
}, 2000)

console.log("I am Second");

setInterval(() => {
    console.log("I am Third");
}, 3000)


