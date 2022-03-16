const express = require('express')
const app = express()


// first middleware
const myFunction = (req,res,next) => {
    const date = new Date().toLocaleString()
    console.log(date)
    next()
}

// second middleware
const myFunction1 = (req,res,next) => {
    const date = new Date().toLocaleString()
    console.log(date)
    next()
}


// use multiple middleware
app.get('/middleware', [myFunction,myFunction1], (req,res) => {
    res.send("hi middleware");
})


app.listen(8000,()=> console.log("server is running"))