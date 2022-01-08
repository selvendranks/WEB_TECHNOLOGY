const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

const sessionOption = {secret: 'secreti',resave:false,saveUninitialized:false}
app.use(session(sessionOption));

const flash = require('connect-flash');
app.use(flash());

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
categories = ['fruit','vegetable','dairy'];
///////////////////////////////Farm routes

app.get('/farms/new',(req,res)=>{
    res.render('farms/new_farms.ejs');
})

app.get('/farms/:id',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id).populate('products');
    console.log(farm);
    res.render('farms/show.ejs',{farm});
})
app.post('/farms',async(req,res)=>{
     const newfarm = new Farm(req.body);
     await newfarm.save();
     req.flash('sucess','Farm sucessfully created')
     res.redirect('/farms');
})

app.get('/farms',async(req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/index.ejs',{farms,message: req.flash('sucess')});
})

app.get('/farms/:id/products/new',async (req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new_product.ejs',{categories,farm})
})

app.post('/farms/:id/products',async(req,res)=>{
    const {id} = req.params;
    const product = new Product(req.body);
    const farm = await Farm.findById(id);
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
    
})

app.delete('/farms/:id',async(req,res)=>{
    const {id} = req.params;
    const deleted = await Farm.findByIdAndDelete(id);//only deletes the farm info not product associated with it
    res.redirect('/farms');
})
/////////////////////////////////////////////product routes routes



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
    const product = await Product.findById(id).populate('farm');
    console.log(product);
    res.render('products/show.ejs',{product});
})












app.listen(1000,()=>{
    console.log('app is listening');
})