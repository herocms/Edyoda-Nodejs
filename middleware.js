const express = require('express')
const app = express()


const myFunction = (req,res,next) => {
    const date = new Date().toLocaleString()
    console.log(date)
    next()
}


app.get('/middleware', myFunction, (req,res) => {
    res.send("hi middleware");
})


app.listen(8000,()=> console.log("server is running"))