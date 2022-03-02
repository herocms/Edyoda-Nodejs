let promise = new Promise(function (resolve, reject) {
    let x = "apple"
    let y = "apple"

    if (x == y) {
        resolve();
    } else {
        reject()
    }
})

promise.then(function () {
    console.log("Promise object resolved")
})
    .then(function () {
        console.log("Operation Successful")
    })
    .then(function () {
        console.log("I am third")
    })
    .catch(function () {
        console.log("Some error has occure")
    })