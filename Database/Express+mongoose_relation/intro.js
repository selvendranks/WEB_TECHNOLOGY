const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


app.set('views',path.join(__dirname,'views'));
app.set('view enginee','ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const mongoose = require('mongoose');
const Product = require('./product');
const Farm = require('./farms');
const { findById } = require('./farms');
mongoose.connect('mongodb://localhost:27017/farmStands2')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})
///////////////////////////////Farm routes
app.get('/farms/new',(req,res)=>{
    res.render('farms/new_farms.ejs');
})

app.get('/farms/:id',async(req,res)=>{
    const {id} = req.params;
    const farm = await findById(id);
    res.render('farms/show',{farm});
})
app.post('/farms',async(req,res)=>{
     const newfarm = new Farm(req.body);
     await newfarm.save();
     res.redirect('/farms');
})

app.get('/farms',async(req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/index.ejs',{farms});
})

/////////////////////////////////////////////product routes routes
categories = ['fruit','vegetable','dairy'];

app.get('/products',async (req,res)=>{
    const {category} = req.query;
    if(category){
         const products = await Product.find({category:category});
         res.render('products/index.ejs',{products,category});

    }
    else{
    const products =  await Product.find({})
    res.render('products/index.ejs',{products,category: 'All'});
    }
})

app.get('/products/new',(req,res)=>{
    console.log("don");
   res.render('products/new_product.ejs',{categories});
})

app.post('/products',async (req,res)=>{
    const newproduct = new Product(req.body);
    await newproduct.save();
    console.log(newproduct);
    res.redirect(`/products/${newproduct._id}`)
})
app.delete('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/edit_product.ejs',{foundProduct,categories});
})
app.put('/products/:id',async(req,res)=>{
    const {id} = req.params;
   const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
    res.redirect(`/products/${product.id}`);
})

app.get('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show.ejs',{product});
})












app.listen(1000,()=>{
    console.log('app is listening');
})