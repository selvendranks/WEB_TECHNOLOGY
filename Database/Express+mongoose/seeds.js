const mongoose = require('mongoose');
const Product = require('./product');
mongoose.connect('mongodb://localhost:27017/farmStands')
.then(()=>{
    console.log("connected_007#ooy?47_&drag")
})
.catch((err)=>{
    console.log(err);
})

const p = new Product({
    name: 'Ruby Grape',
    price: '1.9',
    category:'fruit'
})
.save()
        .then(data=>{
            console.log(p);
        })
        .catch(err=>{
            console.log(err);
        })
const seedProducts = [
            {
                name: 'Fairy Eggplant',
                price: 1.00,
                category: 'vegetable'
            },
            {
                name: 'Organic Goddess Melon',
                price: 4.99,
                category: 'fruit'
            },
            {
                name: 'Organic Mini Seedless Watermelon',
                price: 3.99,
                category: 'fruit'
            },
            {
                name: 'Organic Celery',
                price: 1.50,
                category: 'vegetable'
            },
            {
                name: 'Chocolate Whole Milk',
                price: 2.69,
                category: 'dairy'
            },
        ]
        
Product.insertMany(seedProducts)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })