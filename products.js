const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config();

const password = process.env.MONGODB_PASSWORD
const app = express()

const dbURI = `mongodb+srv://msdroid:${password}@cluster0.p7yrb.mongodb.net/edyoda?retryWrites=true&w=majority`
const option = {
    useUnifiedTopology:true,
    useNewUrlParser : true
}

mongoose.connect(dbURI,option).then(() => {
    console.log('Database connect successfully');
})

// ==========================================================
// products collection and insert some documents
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
// ========================================================


// ========================================================
// users collection and insert some documents
const userSchema = new mongoose.Schema({},{strict:false})
const user = mongoose.model('users', userSchema)
app.post('/user',async (req,res) => {
    const data = await user.insertMany([
        {
            _id:1,
            name:"amit",
            role:"admin",
            mobile:8745698521
        },
        {
            _id:2,
            name:"sumit",
            role:"editor",
            mobile:5846852145
        },
        {
            _id:1,
            name:"amit",
            role:"admin",
            mobile:1234567890
        }
    ])
    res.send(data)
})

// all product get api
app.get('/product', async (req,res) => {
    const data = await product.find();
    res.send(data);
})

// all product get using param id
app.get('/product/:id', async (req, res) => {
    var productId = req.params.id
    // console.log(product_id)
    var data = await product.find({_id:productId})
    res.send(data)
})

app.listen(8000,() => {
    console.log('Server started on port 8000 !');
})