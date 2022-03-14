const mongoose = require('mongoose')
const express = require('express')

const app = express()

const dbURI = "mongodb+srv://msdroid:tm56gyN7K878MunK@cluster0.p7yrb.mongodb.net/edyoda?retryWrites=true&w=majority"
const option = {
    useUnifiedTopology:true,
    useNewUrlParser : true
}

mongoose.connect(dbURI,option).then(() => {
    console.log('Database connect successfully');
})

const productSchema = new mongoose.Schema({},{strict:false})

const product = mongoose.model('products', productSchema)

app.post('/product', async (req, res) => {

    const data = await product.insertMany([
        {
            id : 1,
            name : "redmi",
            isAccessories : false,
            price : 19000
        },
        {
            id : 2,
            name : "shoe",
            isAccessories : true,
            price : 500
        },
        {
            id : 1,
            name : "shirt",
            isAccessories : true,
            price : 900
        }
    ])

    res.send(data)
})



app.listen(8000,() => {
    console.log('Server started on port 8000 !');
})