const express = require('express');
const app = express();
const user = require('./models/user');
app.set('view engine','ejs');

app.get('/register',(req,res)=>{
    res.render('register');
})
app.get('/secret',(req,res)=>{
    res.send('This is secret');
})

app.listen(3000,()=>{
    console.log('connected');
})