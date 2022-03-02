const express = require('express');
const app = express()


app.get('/testAPI', (req, res) => {
    res.send('test api');
})

app.get('/helloworld', (req, res) => {
    res.send('Hello World');
})

app.listen(3001, () => {
    console.log('Server Started on port 3001')
})