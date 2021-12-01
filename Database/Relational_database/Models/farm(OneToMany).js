const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farm')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
});

const prodcutSchema = new mongoose.Schema({
    name : String,
    price : Number,
    season:{
        type:String,
        enum: ['Spring','Summer','Fall','Winter']
    }
});

const Product = mongoose.model('Product',prodcutSchema);

Product.insertMany([
    {name: 'Goddes Melon'}
])