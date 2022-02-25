function create(data, callback) {
    var str = "Hi this is data " + data
    callback(str)
}

function logData(data) {
    console.log(data)
}

create("Node is best", logData)